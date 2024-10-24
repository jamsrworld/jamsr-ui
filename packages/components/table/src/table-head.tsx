import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableHeaderProps = UIProps<"thead">;

export const TableHeader = <T extends React.ElementType = "thead">(
  props: ComponentPropsWithAs<T>,
) => {
  const { as, children, className, ...restProps } = props as TableHeaderProps;
  const Component = as ?? "thead";
  const { slots } = useTableContext();

  return (
    <Component
      className={slots.thead({
        className,
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
