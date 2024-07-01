import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableBodyProps = UIProps<"tbody">;

export const TableBody = <T extends React.ElementType = "tbody">(
  props: ComponentPropsWithAs<T>,
) => {
  const { as, children, className, ...restProps } = props as TableBodyProps;

  const Component = as ?? "tbody";
  const { slots, classNames } = useTableContext();
  return (
    <Component
      className={slots.tbody({
        className: cn(className, classNames?.tbody),
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};