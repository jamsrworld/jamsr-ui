import { useUIConfig } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { cn, deepMergeProps, mergeGlobalProps } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableCellProps = UIProps<"td">;

export const TableCell = <T extends React.ElementType = "td">(
  $props: ComponentPropsWithAs<T>,
) => {
  const { tableCell: _globalProps = {} } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

  const {
    as,
    children,
    className: $className,
    ...restProps
  } = props as TableCellProps;
  const Component = as ?? "td";
  const { styles, classNames } = useTableContext();
  const className = styles.td({
    className: cn($className, classNames?.td),
  });
  return (
    <Component className={className} {...restProps}>
      {globalProps.children}
      {children}
    </Component>
  );
};
