import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarMenuItemProps<T extends React.ElementType = "li"> =
  ComponentPropsWithAs<T>;

export const SidebarMenuItem = <T extends React.ElementType = "li">(
  props: SidebarMenuItemProps<T>,
) => {
  const { children, className: $className, ...restProps } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.menuItem({
    className: cn(classNames?.menuItem, $className),
  });
  return (
    <li data-slot="menuItem" className={className} {...restProps}>
      {children}
    </li>
  );
};
