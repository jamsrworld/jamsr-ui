import { cn, dataAttr, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarMenuItemButtonProps = UIProps<"button"> & {
  isDisabled?: boolean;
};
export const SidebarMenuItemButton = (props: SidebarMenuItemButtonProps) => {
  const {
    children,
    className: $className,
    isDisabled = false,
    disabled: $disabled,
    ...restProps
  } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.menuItemButton({
    className: cn(classNames?.menuItemButton, $className),
  });
  const disabled = isDisabled || $disabled;
  return (
    <button
      type="button"
      data-slot="menuItemButton"
      className={className}
      disabled={disabled}
      data-disabled={dataAttr(disabled)}
      aria-disabled={dataAttr(disabled)}
      {...restProps}
    >
      {children}
    </button>
  );
};
