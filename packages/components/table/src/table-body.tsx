import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableBodyProps = UIProps<"tbody">;

export const TableBody = <T extends React.ElementType = "tbody">(
  $props: ComponentPropsWithAs<T>,
) => {
  const { tableBody:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

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
      {children}
    </Component>
  );
};
