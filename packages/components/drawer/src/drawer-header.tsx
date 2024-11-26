import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useDrawerContext } from "./use-drawer-context";

export type DrawerHeaderProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DrawerHeader = <T extends React.ElementType = "div">(
  $props: DrawerHeaderProps<T>,
) => {
  const props = $props;
  const { as, className: $className, ...restProps } = props;
  const { styles, classNames } = useDrawerContext();
  const className = styles.header({
    className: cn($className, classNames?.header),
  });
  const Component = as ?? "div";
  return <Component data-slot="header" className={className} {...restProps} />;
};
