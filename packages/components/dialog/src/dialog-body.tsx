import { useUIStyle } from "@jamsr-ui/styles";
import { type ComponentPropsWithAs, cn, deepMergeProps } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogBodyProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DialogBody = <T extends React.ElementType = "div">(
  $props: ComponentPropsWithAs<T, DialogBodyProps>,
) => {
  const { dialogBody: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { as, children, className: $className, ...restProps } = props;
  const { styles, classNames } = useDialogContext();
  const Component = as ?? "div";
  const className = styles.body({
    className: cn($className, classNames?.body),
  });
  return (
    <Component data-slot="body" className={className} {...restProps}>
      {children}
    </Component>
  );
};
