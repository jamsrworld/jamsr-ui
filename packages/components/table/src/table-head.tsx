import { useUIConfig } from "@jamsr-ui/config";
import {
  cn,
  deepMergeProps,
  mergeGlobalProps,
  type ComponentPropsWithAs,
  type UIProps,
} from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableHeaderProps = UIProps<"thead">;

export const TableHeader = <T extends React.ElementType = "thead">(
  $props: ComponentPropsWithAs<T, TableHeaderProps>,
) => {
  const { tableHeader: _globalProps = {} } = useUIConfig();
  const _props = $props as TableHeaderProps;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

  const {
    as,
    children,
    className: $className,
    ...restProps
  } = props as TableHeaderProps;
  const Component = as ?? "thead";
  const { styles, classNames } = useTableContext();
  const className = styles.thead({
    className: cn($className, classNames?.thead),
  });
  return (
    <Component className={className} {...restProps}>
      {globalProps.children}
      {children}
    </Component>
  );
};
