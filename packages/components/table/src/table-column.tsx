import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableColumnProps = UIProps<"th">;

export const TableColumn = <T extends React.ElementType = "th">(
  props: ComponentPropsWithAs<T>,
) => {
  const { as, children, className, ...restProps } = props as TableColumnProps;
  const Component = as ?? "th";
  const { slots } = useTableContext();
  return (
    <Component
      className={slots.th({
        className,
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
