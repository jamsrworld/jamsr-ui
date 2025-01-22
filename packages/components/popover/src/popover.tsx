import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  type Placement,
} from "@floating-ui/react";
import { useControlledState } from "@jamsr-ui/hooks";
import { useUIConfig } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { cloneElement, useRef } from "react";
import { popover, type PopoverSlots, type PopoverVariantProps } from "./styles";

export type PopoverProps = PopoverVariantProps & {
  classNames?: SlotsToClasses<PopoverSlots>;
  children: React.ReactNode;
  trigger: React.JSX.Element;
  initialOpen?: boolean;
  placement?: Placement;
  isModal?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  enabled?: boolean;
  triggerOn?: "click" | "hover";
  showArrow?: boolean;
  className?: string;
  offset?: number;
  lockScroll?: boolean;
};

export const Popover = ($props: PopoverProps) => {
  const { popover: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    popover.variantKeys,
  );

  const {
    trigger,
    children,
    isOpen: propOpen,
    onOpenChange,
    initialOpen = false,
    isModal = true,
    enabled = true,
    placement = "top",
    triggerOn = "click",
    showArrow = false,
    className,
    offset: offsetValue = 4,
    classNames,
    lockScroll = true,
    ...restProps
  } = props;

  const [open, setOpen] = useControlledState(
    initialOpen,
    propOpen,
    onOpenChange,
  );
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(offsetValue),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 4,
      }),
      shift({ padding: 4 }),
      showArrow
        ? arrow({
            element: arrowRef,
          })
        : undefined,
      size({
        apply({ rects, elements, availableHeight }) {
          return;
          Object.assign(elements.floating.style, {
            width: `${Math.max(100, rects.reference.width)}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context, {
    enabled: triggerOn === "click",
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);
  const hover = useHover(context, {
    enabled: triggerOn === "hover",
    handleClose: safePolygon({ blockPointerEvents: true }),
  });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
    hover,
  ]);

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const ref = context.refs.setReference;

  const triggerContent = cloneElement(
    trigger,
    getReferenceProps({
      ref,
      ...restProps,
    }),
  );

  const styles = popover(variantProps);
  if (!enabled) return trigger;
  return (
    <>
      {triggerContent}
      {open && (
        <FloatingPortal>
          <FloatingOverlay className="z-backdrop" lockScroll={lockScroll}>
            <FloatingFocusManager context={context} modal={isModal}>
              <div
                data-component="popover"
                className={styles.base({
                  className: cn(className, classNames?.base),
                })}
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
              >
                {showArrow && (
                  <FloatingArrow
                    ref={arrowRef}
                    context={context}
                    className={styles.arrow({
                      className: classNames?.arrow,
                    })}
                  />
                )}
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </>
  );
};
