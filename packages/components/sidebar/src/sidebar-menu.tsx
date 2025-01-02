import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarMenuProps<T extends React.ElementType = "ul"> =
  ComponentPropsWithAs<T>;

export const SidebarMenu = <T extends React.ElementType = "div">(
  props: SidebarMenuProps<T>,
) => {
  const { children, className: $className, ...restProps } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.menu({
    className: cn(classNames?.menu, $className),
  });
  return (
    <ul data-slot="menu" className={className} {...restProps}>
      {children}
    </ul>
  );
};
