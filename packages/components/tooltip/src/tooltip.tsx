import {
  FloatingArrow,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  type Placement,
} from "@floating-ui/react";
import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps, type SlotsToClasses } from "@jamsr-ui/utils";
import { cloneElement, useRef, useState } from "react";
import { tooltip, type TooltipSlots, type TooltipVariantProps } from "./styles";

export type TooltipProps = TooltipVariantProps & {
  title: string;
  children: React.JSX.Element;
  placement?: Placement;
  enabled?: boolean;
  offset?: number;
  showArrow?: boolean;
  openDelay?: number;
  closeDelay?: number;
  className?: string;
  classNames?: SlotsToClasses<TooltipSlots>;
};

export const Tooltip = ($props: TooltipProps) => {
  const { tooltip: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    title,
    children,
    placement = "top",
    enabled = true,
    offset: offsetVal = 8,
    showArrow = false,
    closeDelay = 100,
    openDelay = 400,
    className,
    classNames,
    radius,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetVal),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
      showArrow
        ? arrow({
            element: arrowRef,
          })
        : undefined,
    ],
  });
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const ref = context.refs.setReference;

  const hover = useHover(context, {
    move: false,
    handleClose: safePolygon({ blockPointerEvents: true }),
    delay: {
      open: openDelay,
      close: closeDelay,
    },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const triggerContent = cloneElement(
    children,
    getReferenceProps({
      ref,
    }),
  );

  const styles = tooltip({
    className,
    radius,
  });

  if (!enabled) return children;
  return (
    <>
      {triggerContent}
      {isOpen && (
        <FloatingPortal>
          <div
            data-component="tooltip"
            role="tooltip"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className={styles.base({
              className: cn(className, classNames?.base),
            })}
          >
            {showArrow && (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                className={styles.arrow({
                  className: classNames?.base,
                })}
              />
            )}
            {title}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};
