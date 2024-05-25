import { cn, forwardRefUI, type UIProps } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogBodyProps = UIProps<"div">;
export const DialogBody = forwardRefUI<"div", DialogBodyProps>((props, ref) => {
  const { as, children, className, ...restProps } = props;
  const { slots, classNames } = useDialogContext();
  const Component = as ?? "div";

  return (
    <Component
      ref={ref}
      data-slot="body"
      className={slots.body({
        className: cn(classNames?.body, className),
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
});
