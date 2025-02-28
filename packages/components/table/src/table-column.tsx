import { useUIConfig } from "@jamsr-ui/config";
import {
  cn,
  deepMergeProps,
  mergeGlobalProps,
  type ComponentPropsWithAs,
  type UIProps,
} from "@jamsr-ui/utils";
import { useTableContext } from "./table-context";

export type TableColumnProps = UIProps<"th">;

export const TableColumn = <T extends React.ElementType = "th">(
  $props: ComponentPropsWithAs<T>,
) => {
  const { tableColumn: _globalProps = {} } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

  const {
    as,
    children,
    className: $className,
    ...restProps
  } = props as TableColumnProps;
  const Component = as ?? "th";
  const { styles, classNames } = useTableContext();
  const className = styles.th({
    className: cn($className, classNames?.th),
  });
  return (
    <Component className={className} {...restProps}>
      {globalProps.children}
      {children}
    </Component>
  );
};
