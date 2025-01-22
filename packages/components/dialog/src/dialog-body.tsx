import { useUIConfig } from "@jamsr-ui/styles";
import {
  type ComponentPropsWithAs,
  type UIProps,
  cn,
  deepMergeProps,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export type DialogBodyProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DialogBody = <T extends React.ElementType = "div">(
  $props: ComponentPropsWithAs<T, DialogBodyProps>,
) => {
  const { dialogBody: _globalProps = {} } = useUIConfig();
  const _props = $props as UIProps<"div">;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

  const { as, children, className: $className, ...restProps } = props;
  const { styles, classNames } = useDialogContext();
  const Component = as ?? "div";
  const className = styles.body({
    className: cn($className, classNames?.body),
  });
  return (
    <Component data-slot="body" className={className} {...restProps}>
      {globalProps.children}
      {children}
    </Component>
  );
};
