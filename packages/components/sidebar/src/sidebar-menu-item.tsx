import { cn, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarMenuItemProps = UIProps<"li">;
export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
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
