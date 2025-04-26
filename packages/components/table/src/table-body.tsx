import { useUIConfig } from "@jamsr-ui/config";
import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { cn, deepMergeProps, isEmpty, mergeGlobalProps } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";
import { TableEmptyState } from "./table-empty-state";

export type TableBodyProps = UIProps<"tbody">;

export const TableBody = <T extends React.ElementType = "tbody">(
  $props: ComponentPropsWithAs<T, TableBodyProps>,
) => {
  const { tableBody: _globalProps = {} } = useUIConfig();
  const _props = $props as TableBodyProps;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

  const {
    as,
    children,
    className: $className,
    ...restProps
  } = props as TableBodyProps;
  const Component = as ?? "tbody";
  const { styles, classNames } = useTableContext();
  const className = styles.tbody({
    className: cn($className, classNames?.tbody),
  });
  return (
    <Component className={className} {...restProps}>
      {globalProps.children}
      {children}
      {isEmpty(children) && <TableEmptyState />}
    </Component>
  );
};
