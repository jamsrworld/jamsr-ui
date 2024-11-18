import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  type ComponentPropsWithAs,
  type UIProps,
} from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableHeaderProps = UIProps<"thead">;

export const TableHeader = <T extends React.ElementType = "thead">(
  $props: ComponentPropsWithAs<T>,
) => {
  const { tableHeader: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    as,
    children,
    className: $className,
    ...restProps
  } = props as TableHeaderProps;
  const Component = as ?? "thead";
  const { styles, classNames } = useTableContext();
  const className = styles.thead({
    className: cn($className, classNames?.thead),
  });
  return (
    <Component className={className} {...restProps}>
      {children}
    </Component>
  );
};
