/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
import { useFloatingTree, useListItem } from "@floating-ui/react";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  dataAttr,
  deepMergeProps,
  type ComponentPropsWithAs,
} from "@jamsr-ui/utils";
import { useMenu } from "./use-menu";

type Props = {
  isDisabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  label?: string;
  preventCloseOnClick?: boolean;
};

export type MenuItemProps<T extends React.ElementType = "li"> =
  ComponentPropsWithAs<T, Props>;

export const MenuItem = <T extends React.ElementType = "li">(
  $props: MenuItemProps<T>,
) => {
  const { menuItem: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    children,
    isDisabled,
    as,
    className: $className,
    startContent,
    endContent,
    label,
    preventCloseOnClick = false,
    ...restProps
  } = props;
  const menu = useMenu();
  const labelString = label ?? (typeof children === "string" ? children : null);
  const item = useListItem({
    label: isDisabled ? null : labelString,
  });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;
  const { styles } = menu;
  const Component = as ?? "li";
  const className = cn(
    styles.menuItem({ className: $className }),
    menu.classNames?.menuItem,
  );
  return (
    <Component
      data-slot="item"
      ref={item.ref}
      role="menuitem"
      className={className}
      tabIndex={isActive ? 0 : -1}
      data-active={dataAttr(isActive)}
      data-disabled={dataAttr(isDisabled)}
      aria-disabled={dataAttr(isDisabled)}
      {...restProps}
      {...(!isDisabled && {
        onClick(event: React.MouseEvent<HTMLLIElement>) {
          restProps.onClick?.(event);
          if (!preventCloseOnClick) tree?.events.emit("click");
        },
        onMouseEnter(event: React.MouseEvent<HTMLLIElement>) {
          restProps.onMouseEnter?.(event);
          menu.setHasFocusInside(true);
        },
      })}
    >
      {startContent}
      <div className="grow">{children}</div>
      {endContent}
    </Component>
  );
};
