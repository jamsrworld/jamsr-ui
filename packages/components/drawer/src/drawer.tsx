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
import { type ButtonProps } from "@jamsr-ui/button";
import { useControlledState } from "@jamsr-ui/hooks";
import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps, type SlotsToClasses } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import { type ComponentProps, useMemo, useState } from "react";
import { DrawerCloseButton } from "./drawer-close-btn";
import { motionDrawerVariants } from "./motion";
import { drawer, type DrawerSlots, type DrawerVariants } from "./styles";
import { type DrawerContextType, DrawerProvider } from "./use-drawer-context";

export type DrawerProps = DrawerVariants & {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  defaultOpen?: boolean;
  classNames?: SlotsToClasses<DrawerSlots>;
  // @ts-expect-error framer-motion error
  motionProps?: Partial<ComponentProps<typeof m.div>>;
  closeButton?: React.ReactNode;
  isDismissible?: boolean;
  isKeyboardDismissible?: boolean;
  slotProps?: {
    closeButton?: Partial<ButtonProps>;
  };
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
    isBordered,
    scrollBehavior,
    closeButton,
    slotProps,
    isDismissible = true,
    isKeyboardDismissible = true,
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
    enabled: isDismissible,
  });
  const dismiss = useDismiss(context, {
    escapeKey: isKeyboardDismissible,
    outsidePressEvent: "click",
    outsidePress: isDismissible,
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);

  const styles = drawer({
    anchor,
    backdrop,
    size,
    isBordered,
    scrollBehavior,
  });
  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const contextValue: DrawerContextType = useMemo(
    () => ({ styles, classNames, slotProps }),
    [classNames, slotProps, styles],
  );

  const onClose = () => {
    setIsOpen(false);
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
                  variants={motionDrawerVariants}
                  key="modal"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={anchor}
                  className={styles.base({
                    className: cn(className, classNames?.base),
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
                  <DrawerProvider value={contextValue}>
                    {closeButton === null
                      ? null
                      : (closeButton ?? <DrawerCloseButton onClick={onClose} />)}
                    {children}
                  </DrawerProvider>
                </m.div>
              </FloatingFocusManager>
            </FloatingOverlay>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </div>
  );
};
