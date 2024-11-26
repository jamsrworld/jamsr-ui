import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useDrawerContext } from "./use-drawer-context";

export type DrawerBodyProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DrawerBody = <T extends React.ElementType = "div">(
  $props: DrawerBodyProps<T>,
) => {
  const props = $props;
  const { as, className: $className, ...restProps } = props;
  const { styles, classNames } = useDrawerContext();
  const className = styles.body({
    className: cn($className, classNames?.body),
  });
  const Component = as ?? "div";
  return <Component data-slot="body" className={className} {...restProps} />;
};
