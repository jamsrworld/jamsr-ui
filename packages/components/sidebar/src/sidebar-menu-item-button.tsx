import { cn, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarMenuItemButtonProps = UIProps<"button">;
export const SidebarMenuItemButton = (props: SidebarMenuItemButtonProps) => {
  const { children, className: $className, ...restProps } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.menuItemButton({
    className: cn(classNames?.menuItemButton, $className),
  });
  return (
    <button
      type="button"
      data-slot="menuButton"
      className={className}
      {...restProps}
    >
      {children}
    </button>
  );
};
