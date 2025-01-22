import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useUIConfig } from "@jamsr-ui/styles";
import {
  deepMergeProps,
  mergeGlobalProps,
  type UIProps,
  type ComponentPropsWithAs,
} from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import { DialogCloseBtn } from "./dialog-close-btn";
import { useDialogContext } from "./dialog-context";

export type DialogContentProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DialogContent = <T extends React.ElementType = "div">(
  $props: ComponentPropsWithAs<T, DialogContentProps>,
) => {
  const { dialogContent: _globalProps = {} } = useUIConfig();
  const _props = $props as UIProps<"div">;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

  const { as, children, className } = props;
  const {
    interactions,
    context,
    setFloating,
    styles,
    Component: DialogComponent,
    closeButton,
    getDialogProps,
    isOpen,
    classNames,
    isAnimationDisabled,
  } = useDialogContext();
  const Component = as ?? DialogComponent;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <FloatingPortal>
          <FloatingOverlay
            data-slot="backdrop"
            className={styles.backdrop({
              className: classNames?.backdrop,
            })}
            lockScroll
          >
            <FloatingFocusManager context={context} modal>
              <m.div
                {...(!isAnimationDisabled && {
                  initial: { scale: 0.95, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.95, opacity: 0 },
                  transition: {
                    type: "spring",
                    duration: isOpen === true ? 0.3 : 0.6,
                  },
                })}
                className="flex w-full items-center justify-center"
              >
                <Component
                  data-slot="content"
                  ref={setFloating}
                  {...interactions.getFloatingProps()}
                  {...getDialogProps({ className })}
                >
                  {closeButton === null
                    ? null
                    : (closeButton ?? <DialogCloseBtn />)}
                  {globalProps.children}
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
