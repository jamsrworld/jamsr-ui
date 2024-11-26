import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useDrawerContext } from "./use-drawer-context";

export type DrawerFooterProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const DrawerFooter = <T extends React.ElementType = "div">(
  $props: DrawerFooterProps<T>,
) => {
  const props = $props;
  const { as, className: $className, ...restProps } = props;
  const { styles, classNames } = useDrawerContext();
  const className = styles.footer({
    className: cn($className, classNames?.footer),
  });
  const Component = as ?? "div";
  return <Component data-slot="footer" className={className} {...restProps} />;
};
