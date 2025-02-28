/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
import { useFloatingTree, useListItem } from "@floating-ui/react";
import { useHover, useMergeRefs } from "@jamsr-ui/hooks";
import { useUIConfig } from "@jamsr-ui/config";
import {
  cn,
  dataAttr,
  deepMergeProps,
  mergeGlobalProps,
  type UIProps,
  type ComponentPropsWithAs,
} from "@jamsr-ui/utils";
import { type MenuVariantProps } from "./styles";
import { useMenu } from "./use-menu";

type Props = {
  isDisabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  label?: string;
  preventCloseOnClick?: boolean;
  color?: MenuVariantProps["color"];
};

export type MenuItemProps<T extends React.ElementType = "li"> =
  ComponentPropsWithAs<T, Props>;

export const MenuItem = <T extends React.ElementType = "li">(
  $props: MenuItemProps<T>,
) => {
  const { menuItem: _globalProps = {} } = useUIConfig();
  const _props = $props as UIProps<"li", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);
  const {
    children,
    isDisabled,
    as,
    className: $className,
    startContent,
    endContent,
    label,
    preventCloseOnClick = false,
    color,
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
    styles.menuItem({ className: $className, color }),
    menu.classNames?.menuItem,
  );

  const { isHovered, ref: disableRef } = useHover({
    isDisabled,
  });
  const refs = useMergeRefs([item.ref, disableRef]);
  return (
    <Component
      data-slot="item"
      ref={refs}
      role="menuitem"
      className={className}
      data-active={dataAttr(isActive)}
      data-disabled={dataAttr(isDisabled)}
      data-hovered={dataAttr(isHovered)}
      aria-disabled={dataAttr(isDisabled)}
      {...restProps}
      {...(!isDisabled && {
        tabIndex: isActive ? 0 : -1,
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
