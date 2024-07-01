/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
import { useFloatingTree, useListItem } from "@floating-ui/react";
import { type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { menuVariants } from "./style";
import { useMenu } from "./use-menu";

type InternalProps = {
  disabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
};

type MenuItemProps<T extends React.ElementType = "button"> =
  ComponentPropsWithAs<T, InternalProps>;

export const MenuItem = <T extends React.ElementType = "button">(
  props: MenuItemProps<T>,
) => {
  const {
    children,
    disabled,
    as,
    className,
    startContent,
    endContent,
    ...restProps
  } = props;
  const menu = useMenu();
  const item = useListItem({
    label: disabled ? null : children,
  });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;
  const menuClasses = menuVariants();
  const Component = as ?? "button";
  return (
    <Component
      data-slot="item"
      ref={item.ref}
      role="menuitem"
      className={menuClasses.menuItem({ className })}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          restProps.onClick?.(event);
          tree?.events.emit("click");
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          restProps.onFocus?.(event);
          menu.setHasFocusInside(true);
        },
      })}
      {...restProps}
    >
      {startContent}
      <div className="grow text-left">{children}</div>
      {endContent}
    </Component>
  );
};
