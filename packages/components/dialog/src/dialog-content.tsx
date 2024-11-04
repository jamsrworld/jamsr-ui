import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  deepMergeProps,
  type ComponentPropsWithAs,
  type UIProps,
} from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import { DialogClose } from "./dialog-close";
import { useDialogContext } from "./dialog-context";

export type DialogContentProps = UIProps<"div">;

export const DialogContent = <T extends React.ElementType = "div">(
  $props: ComponentPropsWithAs<T, DialogContentProps>,
) => {
  const { dialogContent: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { as, children, className } = props;
  const {
    interactions,
    context,
    setFloating,
    slots: styles,
    Component: DialogComponent,
    hideCloseButton,
    getDialogProps,
    isOpen,
  } = useDialogContext();
  const Component = as ?? DialogComponent;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <FloatingPortal>
          <FloatingOverlay
            data-slot="backdrop"
            className={styles.backdrop()}
            lockScroll
          >
            <FloatingFocusManager context={context} modal>
              {/* @ts-expect-error framer motion error */}
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
                transition={{
                  type: "spring",
                  duration: isOpen === true ? 0.3 : 0.6,
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
