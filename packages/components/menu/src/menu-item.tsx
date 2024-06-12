/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import { type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { forwardRef, type ForwardedRef } from "react";
import { menuVariants } from "./style";
import { useMenu } from "./use-menu";

type InternalProps = {
  label: string;
  disabled?: boolean;
};

type MenuItemProps<T extends React.ElementType = "button"> =
  ComponentPropsWithAs<T, InternalProps>;

export const MenuItemInner = <T extends React.ElementType = "button">(
  props: MenuItemProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const { label, disabled, as, className, ...restProps } = props;
  const menu = useMenu();
  const item = useListItem({
    label: disabled ? null : label,
  });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;
  const menuClasses = menuVariants();
  const Component = as ?? "button";
  return (
    <Component
      data-slot="item"
      {...restProps}
      ref={useMergeRefs([item.ref, ref])}
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
    >
      {label}
    </Component>
  );
};

export const MenuItem = forwardRef(MenuItemInner);
