import { type ComponentPropsWithAs, cn } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogFooterProps = NonNullable<unknown>;

export const DialogFooter = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, DialogFooterProps>,
) => {
  const { children, className, as, ...restProps } = props;
  const { classNames, slots } = useDialogContext();
  const Component = as ?? "div";
  return (
    <Component
      data-slot="footer"
      className={slots.footer({
        className: cn(classNames?.footer, className),
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
