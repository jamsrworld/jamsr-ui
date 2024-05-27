import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useMergeRefs,
} from "@floating-ui/react";
import { forwardRefUI, type UIProps } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import { DialogClose } from "./dialog-close";
import { useDialogContext } from "./dialog-context";

export type DialogContentProps = UIProps<"div">;

export const DialogContent = forwardRefUI<"div", DialogContentProps>(
  (props, ref) => {
    const { as, children, className } = props;
    const {
      interactions,
      context,
      setFloating,
      slots,
      Component: DialogComponent,
      hideCloseButton,
      getDialogProps,
      isOpen,
    } = useDialogContext();
    const Component = as || DialogComponent;
    const mergedRef = useMergeRefs([setFloating, ref]);

    return (
      <AnimatePresence>
        {isOpen && (
          <FloatingPortal>
            <FloatingOverlay
              className={slots.backdrop()}
              lockScroll
            >
              <FloatingFocusManager
                context={context}
                modal
              >
                <m.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: 50,
                    opacity: 0,
                  }}
                  className="flex w-full items-center justify-center"
                >
                  <Component
                    ref={mergedRef}
                    {...interactions.getFloatingProps()}
                    {...getDialogProps({ className })}
                  >
                    {!hideCloseButton && <DialogClose />}
                    {children}
                  </Component>
                </m.div>
              </FloatingFocusManager>
            </FloatingOverlay>
          </FloatingPortal>
        )}
      </AnimatePresence>
    );
  },
);
DialogContent.displayName = "UI.DialogContent";
