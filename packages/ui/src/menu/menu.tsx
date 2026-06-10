"use client";

import { createContext, use, useMemo } from "react";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";

import { menuStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type MenuVariants = VariantProps<typeof menuStyles>;

const MenuContext = createContext<{
  styles: ReturnType<typeof menuStyles>;
  showArrow?: boolean;
  backdrop: MenuVariants["backdrop"];
} | null>(null);

const useMenuContext = () => {
  const ctx = use(MenuContext);
  if (!ctx) {
    throw new Error("useMenuContext must be used within a MenuContext");
  }
  return ctx;
};

export const Menu = (props: Menu.Props) => {
  const {
    radius,
    backdrop = "transparent",
    color,
    showArrow,
    ...restProps
  } = props;
  const styles = menuStyles({ radius, backdrop, color });
  const value = useMemo(
    () => ({ styles, showArrow, backdrop }),
    [styles, showArrow, backdrop],
  );
  return (
    <MenuContext.Provider value={value}>
      <MenuPrimitive.Root {...restProps} />
    </MenuContext.Provider>
  );
};

export namespace Menu {
  export interface Props extends MenuPrimitive.Root.Props, MenuVariants {
    showArrow?: boolean;
  }
}

export const MenuTrigger = (props: MenuPrimitive.Trigger.Props) => {
  return <MenuPrimitive.Trigger {...props} />;
};

export const MenuContent = (props: MenuContent.Props) => {
  const { styles, showArrow, backdrop } = useMenuContext();
  const { slotProps, ...restProps } = props;
  return (
    <MenuPrimitive.Portal {...slotProps?.portal}>
      {backdrop !== "transparent" && (
        <MenuPrimitive.Backdrop
          {...slotProps?.backdrop}
          className={styles.backdrop({
            className: cn(slotProps?.backdrop?.className),
          })}
        />
      )}
      <MenuPrimitive.Positioner
        sideOffset={showArrow ? 8 : 4}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <MenuPrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};
export namespace MenuContent {
  export interface Props extends MenuPrimitive.Popup.Props {
    slotProps?: {
      portal?: MenuPrimitive.Portal.Props;
      backdrop?: MenuPrimitive.Backdrop.Props;
      positioner?: MenuPrimitive.Positioner.Props;
    };
  }
}

export const MenuItem = (props: MenuItem.Props) => {
  const { styles } = useMenuContext();
  const { className, color, ...restProps } = props;
  return (
    <MenuPrimitive.Item
      {...restProps}
      className={styles.menuItem({ className: cn(className), color })}
    />
  );
};
export namespace MenuItem {
  export interface Props extends MenuPrimitive.Item.Props {
    color?: MenuVariants["color"];
  }
}

export const MenuGroup = (props: MenuPrimitive.Group.Props) => {
  const { styles } = useMenuContext();
  return (
    <MenuPrimitive.Group
      {...props}
      className={styles.menuGroup({ className: cn(props.className) })}
    />
  );
};

export const MenuGroupLabel = (props: MenuPrimitive.GroupLabel.Props) => {
  const { styles } = useMenuContext();
  return (
    <MenuPrimitive.GroupLabel
      {...props}
      className={styles.menuGroupLabel({ className: cn(props.className) })}
    />
  );
};

export const MenuSeparator = (props: MenuPrimitive.Separator.Props) => {
  return <MenuPrimitive.Separator {...props} />;
};

export const MenuCheckboxItem = (props: MenuPrimitive.CheckboxItem.Props) => {
  const { styles } = useMenuContext();
  return (
    <MenuPrimitive.CheckboxItem
      {...props}
      className={styles.menuItem({ className: cn(props.className) })}
    />
  );
};

export const MenuRadioGroup = (props: MenuPrimitive.RadioGroup.Props) => {
  return <MenuPrimitive.RadioGroup {...props} />;
};

export const MenuRadioItem = (props: MenuPrimitive.RadioItem.Props) => {
  const { styles } = useMenuContext();
  return (
    <MenuPrimitive.RadioItem
      {...props}
      className={styles.menuItem({ className: cn(props.className) })}
    />
  );
};

export const MenuCheckboxItemIndicator = (
  props: MenuPrimitive.CheckboxItemIndicator.Props,
) => {
  const { styles } = useMenuContext();
  const { children = <CheckIcon />, className, ...restProps } = props;
  return (
    <MenuPrimitive.CheckboxItemIndicator
      keepMounted
      {...restProps}
      className={styles.menuItemIndicator({ className: cn(className) })}
      render={(props, { checked }) => (
        <span {...props}>{checked ? children : null} </span>
      )}
    />
  );
};

export const MenuRadioItemIndicator = (
  props: MenuPrimitive.RadioItemIndicator.Props,
) => {
  const { styles } = useMenuContext();
  const { children = <CheckIcon />, className, ...restProps } = props;
  return (
    <MenuPrimitive.RadioItemIndicator
      keepMounted
      {...restProps}
      className={styles.menuItemIndicator({ className: cn(className) })}
      render={(props, { checked }) => (
        <span {...props}>{checked ? children : null}</span>
      )}
    />
  );
};

export const MenuSubmenuIndicator = (props: React.ComponentProps<"div">) => {
  const { styles } = useMenuContext();
  return (
    <div
      {...props}
      className={styles.submenuIndicator({ className: cn(props.className) })}
    />
  );
};

export const MenuArrow = (props: MenuPrimitive.Arrow.Props) => {
  const { styles } = useMenuContext();
  const { children = <ArrowSvg />, className, ...restProps } = props;
  return (
    <MenuPrimitive.Arrow
      {...restProps}
      className={styles.arrow({ className: cn(className) })}
    >
      {children}
    </MenuPrimitive.Arrow>
  );
};

export const MenuSubmenuRoot = (props: MenuPrimitive.SubmenuRoot.Props) => {
  return <MenuPrimitive.SubmenuRoot {...props} />;
};

export const MenuSubmenuTrigger = (
  props: MenuPrimitive.SubmenuTrigger.Props,
) => {
  const { styles } = useMenuContext();
  return (
    <MenuPrimitive.SubmenuTrigger
      {...props}
      className={styles.menuItem({ className: cn(props.className) })}
    />
  );
};

export const MenuSubmenuContent = (props: MenuSubmenuContent.Props) => {
  const { styles } = useMenuContext();
  const { slotProps, ...restProps } = props;
  return (
    <MenuPrimitive.Portal {...slotProps?.portal}>
      <MenuPrimitive.Positioner
        sideOffset={getOffset}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <MenuPrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};

function getOffset({ side }: { side: MenuPrimitive.Positioner.Props["side"] }) {
  return side === "top" || side === "bottom" ? 4 : -4;
}

export namespace MenuSubmenuContent {
  export interface Props extends MenuPrimitive.Popup.Props {
    slotProps?: {
      portal?: MenuPrimitive.Portal.Props;
      positioner?: MenuPrimitive.Positioner.Props;
    };
  }
}

const CheckIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="currentcolor"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />{" "}
    </svg>
  );
};

const ArrowSvg = (props: React.ComponentProps<"svg">) => {
  return (
    <svg fill="none" height="10" viewBox="0 0 20 10" width="20" {...props}>
      <path
        className="fill-current"
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
      />
      <path d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z" />
      <path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z" />
    </svg>
  );
};
