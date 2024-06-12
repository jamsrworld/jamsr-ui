import {
  FloatingArrow,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
  type Placement,
} from "@floating-ui/react";
import {
  cloneElement,
  forwardRef,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
} from "react";

export type TooltipProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  children: JSX.Element;
  placement?: Placement;
  enabled?: boolean;
};

export const TooltipInner = (
  props: TooltipProps,
  propRef: ForwardedRef<HTMLDivElement>,
) => {
  const {
    title,
    children,
    placement = "top",
    enabled = true,
    ...restProps
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(16),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });
  const ref = useMergeRefs([
    // eslint-disable-next-line @typescript-eslint/unbound-method
    context.refs.setReference,
    propRef,
  ]);

  // Event listeners to change the open state
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  // Role props for screen readers
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
      ...restProps,
    }),
  );

  if (!enabled) {
    return children;
  }
  return (
    <>
      {triggerContent}
      {isOpen && (
        <FloatingPortal>
          <div
            data-component="tooltip"
            role="tooltip"
            className="z-popover inline-block rounded-lg border border-black bg-background px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-opacity duration-300"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <div className="absolute z-1 h-1 w-1/2 bg-white blur-lg" />
            <FloatingArrow
              ref={arrowRef}
              context={context}
              className="fill-background"
            />
            {title}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export const Tooltip = forwardRef(TooltipInner);
