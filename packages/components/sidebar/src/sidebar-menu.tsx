import { cn, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarMenuProps = UIProps<"ul">;
export const SidebarMenu = (props: SidebarMenuProps) => {
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
