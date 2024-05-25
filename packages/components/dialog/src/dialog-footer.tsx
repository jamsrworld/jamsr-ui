import { cn, forwardRefUI, type UIProps } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogFooterProps = UIProps<"div">;
export const DialogFooter = forwardRefUI<"div", DialogFooterProps>(
  (props, ref) => {
    const { children, className, as, ...restProps } = props;
    const { classNames, slots } = useDialogContext();
    const Component = as ?? "div";
    return (
      <Component
        ref={ref}
        data-slot="footer"
        className={slots.footer({
          className: cn(classNames?.footer, className),
        })}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
