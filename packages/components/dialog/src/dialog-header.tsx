import { useUIStyle } from "@jamsr-ui/styles";
import { type ComponentPropsWithAs, cn, deepMergeProps } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogHeaderProps = NonNullable<unknown>;

export const DialogHeader = <T extends React.ElementType = "div">(
  $props: ComponentPropsWithAs<T, DialogHeaderProps>,
) => {
  const { dialogHeader: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { as, children, className, ...restProps } = props;
  const { classNames, slots } = useDialogContext();
  const Component = as ?? "div";
  return (
    <Component
      data-slot="header"
      className={slots.header({
        className: cn(classNames?.footer, className),
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
