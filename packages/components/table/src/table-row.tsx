import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableRowProps = UIProps<"tr">;

export const TableRow = <T extends React.ElementType = "tr">(
  props: ComponentPropsWithAs<T>,
) => {
  const { as, children, className, ...restProps } = props as TableRowProps;
  const Component = as ?? "tr";
  const { slots } = useTableContext();

  return (
    <Component
      className={slots.tr({
        className,
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
