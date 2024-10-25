import { cn, type ComponentPropsWithAs, type UIProps } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableRowProps = UIProps<"tr">;

export const TableRow = <T extends React.ElementType = "tr">(
  props: ComponentPropsWithAs<T>,
) => {
  const {
    as,
    children,
    className: $className,
    ...restProps
  } = props as TableRowProps;
  const Component = as ?? "tr";
  const { styles, classNames } = useTableContext();
  const className = styles.tr({
    className: cn($className, classNames?.tr),
  });
  return (
    <Component className={className} {...restProps}>
      {children}
    </Component>
  );
};
