import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableCellProps = UIProps<"td">;

export const TableCell = <T extends React.ElementType = "td">(
  props: ComponentPropsWithAs<T>,
) => {
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
