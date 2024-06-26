import {
  FloatingArrow,
  FloatingFocusManager,
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
  useMergeRefs,
  useRole,
  type Placement,
} from "@floating-ui/react";
import { useControlledState } from "@jamsr-ui/hooks";
import { cn } from "@jamsr-ui/utils";
import { cloneElement, forwardRef, useRef } from "react";

type PopoverProps = {
  children: React.ReactNode;
  trigger: JSX.Element;
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  classNames?: {
    wrapper: string;
  };
  enabled?: boolean;
  triggerOn?: "click" | "hover";
  showArrow?: boolean;
  className?: string;
  applyWidth?: boolean;
};

export const Popover = forwardRef<HTMLButtonElement, PopoverProps>(
  (props, propRef) => {
    const {
      trigger,
      children,
      open: propOpen,
      onOpenChange,
      initialOpen = false,
      modal,
      classNames,
      enabled = true,
      placement = "bottom",
      triggerOn = "click",
      showArrow = false,
      className,
      applyWidth,
    } = props;

    const [open, setOpen] = useControlledState({
      prop: propOpen,
      onChange: onOpenChange,
      defaultProp: initialOpen,
    });

    const arrowRef = useRef(null);

    const { refs, floatingStyles, context } = useFloating({
      placement,
      open,
      onOpenChange: setOpen,
      middleware: [
        offset(4),
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
            if (!applyWidth) return;
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
    const ref = useMergeRefs([
      // eslint-disable-next-line @typescript-eslint/unbound-method
      context.refs.setReference,
      propRef,
    ]);

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
            <FloatingFocusManager
              context={context}
              modal={modal}
            >
              <div
                data-component="popover"
                data-slot="wrapper"
                className={cn(
                  "z-popover border-divider bg-background shadow-card rounded-2xl border p-2 focus:outline-none",
                  classNames?.wrapper,
                  className,
                )}
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
              >
                {showArrow && (
                  <FloatingArrow
                    ref={arrowRef}
                    context={context}
                    className="fill-background-neutral"
                  />
                )}
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </>
    );
  },
);
Popover.displayName = "Popover";
