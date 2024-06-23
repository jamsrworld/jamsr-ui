import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { ComponentPropsWithAs, type UIProps } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import { DialogClose } from "./dialog-close";
import { useDialogContext } from "./dialog-context";

export type DialogContentProps = UIProps<"div">;

export const DialogContent = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, DialogContentProps>,
) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <FloatingPortal>
          <FloatingOverlay
            data-slot="backdrop"
            className={slots.backdrop()}
            lockScroll
          >
            <FloatingFocusManager
              context={context}
              modal
            >
              {/* @ts-ignore */}
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
                  data-slot="content"
                  ref={setFloating}
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
};
