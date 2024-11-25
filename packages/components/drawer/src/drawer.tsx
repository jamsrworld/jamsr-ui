import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsr-ui/hooks";
import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps, type SlotsToClasses } from "@jamsr-ui/utils";
import { AnimatePresence, m, type Variant } from "framer-motion";
import { type ComponentProps, useState } from "react";
import { drawer, type DrawerSlots, type DrawerVariants } from "./style";

export type DrawerProps = DrawerVariants & {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  defaultOpen?: boolean;
  classNames?: SlotsToClasses<DrawerSlots>;
  // @ts-expect-error framer-motion error
  motionProps?: Partial<ComponentProps<typeof m.div>>;
};

type Anchor = NonNullable<DrawerVariants["anchor"]>;

const variants: { initial: Variant; animate: Variant; exit: Variant } = {
  initial(custom: Anchor) {
    switch (custom) {
      case "left":
        return {
          x: "-100%",
        };
      case "right":
        return {
          x: "100%",
        };
      case "top":
        return {
          y: "-100%",
        };
      case "bottom":
        return {
          y: "100%",
        };
      default:
        return {};
    }
  },
  animate(custom: Anchor) {
    switch (custom) {
      case "left":
        return {
          x: 0,
        };
      case "right":
        return {
          x: 0,
        };
      case "top":
        return {
          y: 0,
        };
      case "bottom":
        return {
          y: 0,
        };
      default:
        return {};
    }
  },
  exit(custom: Anchor) {
    switch (custom) {
      case "left":
        return {
          x: "-100%",
        };
      case "right":
        return {
          x: "100%",
        };
      case "top":
        return {
          y: "-100%",
        };
      case "bottom":
        return {
          y: "100%",
        };
      default:
        return {};
    }
  },
};

export const Drawer = ($props: DrawerProps) => {
  const { drawer: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const [isAnimating, setIsAnimating] = useState(false);
  const {
    children,
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange,
    className,
    anchor = "right",
    backdrop,
    classNames,
    size,
    motionProps,
  } = props;

  const [isOpen, setIsOpen] = useControlledState(
    defaultOpen,
    isOpenProp,
    onOpenChange,
  );

  const { context, refs } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setFloating } = refs;

  const click = useClick(context, {
    enabled: true,
  });
  const dismiss = useDismiss(context, {
    escapeKey: true,
    outsidePressEvent: "click",
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);

  const styles = drawer({
    anchor,
    backdrop,
    size,
  });
  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <div data-component="drawer">
      <AnimatePresence initial={false}>
        {isOpen && (
          <FloatingPortal>
            <FloatingOverlay
              lockScroll
              className={styles.backdrop({
                className: classNames?.backdrop,
              })}
            >
              <FloatingFocusManager
                context={context}
                disabled={isAnimating}
                modal
              >
                {/* @ts-expect-error framer motion error */}
                <m.div
                  variants={variants}
                  key="modal"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={anchor}
                  className={styles.content({
                    className: cn(className, classNames?.content),
                  })}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: isOpen === true ? 0.3 : 0.6,
                  }}
                  onAnimationStart={handleAnimationStart}
                  onAnimationComplete={handleAnimationComplete}
                  ref={setFloating}
                  {...interactions.getFloatingProps()}
                  {...motionProps}
                >
                  {children}
                </m.div>
              </FloatingFocusManager>
            </FloatingOverlay>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </div>
  );
};
