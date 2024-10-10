import { type ComponentPropsWithAs, cn } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogBodyProps = NonNullable<unknown>;

export const DialogBody = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, DialogBodyProps>,
) => {
  const { as, children, className, ...restProps } = props;
  const { slots, classNames } = useDialogContext();
  const Component = as ?? "div";

  return (
    <Component
      data-slot="body"
      className={slots.body({
        className: cn(classNames?.body, className),
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
