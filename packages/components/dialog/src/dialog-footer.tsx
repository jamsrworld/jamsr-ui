import { useUIStyle } from "@jamsr-ui/styles";
import { type ComponentPropsWithAs, cn, deepMergeProps } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogFooterProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DialogFooter = <T extends React.ElementType = "div">(
  $props: ComponentPropsWithAs<T, DialogFooterProps>,
) => {
  const { dialogFooter:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const { children, className: $className, as, ...restProps } = props;
  const { classNames, styles } = useDialogContext();
  const Component = as ?? "div";
  const className = styles.footer({
    className: cn($className, classNames?.footer),
  });
  return (
    <Component data-slot="footer" className={className} {...restProps}>
      {children}
    </Component>
  );
};
