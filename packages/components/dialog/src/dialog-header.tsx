import { useUIStyle } from "@jamsr-ui/styles";
import {
  type ComponentPropsWithAs,
  type UIProps,
  cn,
  deepMergeProps,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogHeaderProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DialogHeader = <T extends React.ElementType = "div">(
  $props: DialogHeaderProps<T>,
) => {
  const { dialogHeader: _globalProps = {} } = useUIStyle();
  const _props = $props as UIProps<"div">;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

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
