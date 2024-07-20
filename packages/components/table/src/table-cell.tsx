import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableCellProps = UIProps<"td">;

export const TableCell = <T extends React.ElementType = "td">(
  props: ComponentPropsWithAs<T>,
) => {
  const { as, children, className, ...restProps } = props as TableCellProps;
  const Component = as ?? "td";
  const { slots, classNames } = useTableContext();

  return (
    <Component
      className={slots.td({
        className: cn(classNames?.td, className),
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
