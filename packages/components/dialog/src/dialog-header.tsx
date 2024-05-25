import { cn, forwardRefUI, type UIProps } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogHeaderProps = UIProps<"div">;
export const DialogHeader = forwardRefUI<"div", DialogHeaderProps>(
  (props, ref) => {
    const { as, children, className, ...restProps } = props;
    const { classNames, slots } = useDialogContext();
    const Component = as ?? "div";
    return (
      <Component
        ref={ref}
        data-slot="header"
        className={slots.header({
          className: cn(classNames?.footer, className),
        })}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
