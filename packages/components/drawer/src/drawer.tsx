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
import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import { drawer } from "./style";

export type DrawerProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  defaultOpen?: boolean;
};

export const Drawer = (props: DrawerProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const {
    children,
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange,
    className,
  } = props;

  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });

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

  const styles = drawer({});
  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <div data-component="drawer">
      <AnimatePresence>
        {isOpen && (
          <FloatingPortal>
            <FloatingOverlay lockScroll className={styles.backdrop()}>
              <FloatingFocusManager
                context={context}
                disabled={isAnimating}
                modal
              >
                {/* @ts-expect-error framer motion error */}
                <m.div
                  key="modal"
                  initial={{ x: "100%" }}
                  animate={{
                    x: 0,
                  }}
                  exit={{
                    x: "100%",
                  }}
                  className={styles.content({
                    className,
                  })}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.4,
                  }}
                  onAnimationStart={handleAnimationStart}
                  onAnimationComplete={handleAnimationComplete}
                  ref={setFloating}
                  {...interactions.getFloatingProps()}
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
