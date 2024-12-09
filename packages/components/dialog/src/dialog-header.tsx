import { useUIStyle } from "@jamsr-ui/styles";
import { type ComponentPropsWithAs, cn, deepMergeProps } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogHeaderProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DialogHeader = <T extends React.ElementType = "div">(
  $props: DialogHeaderProps<T>,
) => {
  const { dialogHeader:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const { as, children, className: $className, ...restProps } = props;
  const { classNames, styles } = useDialogContext();
  const Component = as ?? "div";
  const className = styles.header({
    className: cn($className, classNames?.header),
  });
  return (
    <Component data-slot="header" className={className} {...restProps}>
      {children}
    </Component>
  );
};
