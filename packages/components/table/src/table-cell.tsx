import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableCellProps = UIProps<"td">;

export const TableCell = <T extends React.ElementType = "td">(
  $props: ComponentPropsWithAs<T>,
) => {
  const { tableCell:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

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
      {children}
    </Component>
  );
};
