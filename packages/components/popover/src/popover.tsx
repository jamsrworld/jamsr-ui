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
import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import { cloneElement, useRef } from "react";

export type PopoverProps = {
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
  classNames?: {
    popover?: string;
    arrow?: string;
  };
  offset?: number;
  lockScroll?: boolean;
};

export const Popover = ($props: PopoverProps) => {
  const { popover: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

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
    }),
  );
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
                className={cn(
                  "z-popover rounded-2xl bg-content1 p-2 text-sm shadow-md backdrop-blur-3xl focus:outline-none",
                  className,
                  classNames?.popover,
                )}
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
              >
                {showArrow && (
                  <FloatingArrow
                    ref={arrowRef}
                    context={context}
                    className={cn("fill-content1", classNames?.arrow)}
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
