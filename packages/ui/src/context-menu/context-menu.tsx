"use client";

import { createContext, use, useMemo } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

import { contextMenuStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type ContextMenuVariants = VariantProps<typeof contextMenuStyles>;

const ContextMenuContext = createContext<{
  styles: ReturnType<typeof contextMenuStyles>;
  showArrow?: boolean;
} | null>(null);

const useContextMenuContext = () => {
  const ctx = use(ContextMenuContext);
  if (!ctx) {
    throw new Error(
      "useContextMenuContext must be used within a ContextMenuContext",
    );
  }
  return ctx;
};

export const ContextMenu = (props: ContextMenu.Props) => {
  const { radius, color, showArrow, ...restProps } = props;
  const styles = contextMenuStyles({ radius, color });
  const value = useMemo(() => ({ styles, showArrow }), [styles, showArrow]);
  return (
    <ContextMenuContext.Provider value={value}>
      <ContextMenuPrimitive.Root {...restProps} />
    </ContextMenuContext.Provider>
  );
};

export namespace ContextMenu {
  export interface Props
    extends ContextMenuPrimitive.Root.Props, ContextMenuVariants {
    showArrow?: boolean;
  }
}

export const ContextMenuTrigger = (
  props: ContextMenuPrimitive.Trigger.Props,
) => {
  return <ContextMenuPrimitive.Trigger {...props} />;
};

export const ContextMenuContent = (props: ContextMenuContent.Props) => {
  const { styles, showArrow } = useContextMenuContext();
  const { slotProps, ...restProps } = props;
  return (
    <ContextMenuPrimitive.Portal {...slotProps?.portal}>
      <ContextMenuPrimitive.Positioner
        sideOffset={showArrow ? 8 : 4}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <ContextMenuPrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
};
export namespace ContextMenuContent {
  export interface Props extends ContextMenuPrimitive.Popup.Props {
    slotProps?: {
      portal?: ContextMenuPrimitive.Portal.Props;
      backdrop?: ContextMenuPrimitive.Backdrop.Props;
      positioner?: ContextMenuPrimitive.Positioner.Props;
    };
  }
}

export const ContextMenuItem = (props: ContextMenuItem.Props) => {
  const { styles } = useContextMenuContext();
  const { className, color, ...restProps } = props;
  return (
    <ContextMenuPrimitive.Item
      {...restProps}
      className={styles.menuItem({ className: cn(className), color })}
    />
  );
};
export namespace ContextMenuItem {
  export interface Props extends ContextMenuPrimitive.Item.Props {
    color?: ContextMenuVariants["color"];
  }
}

export const ContextMenuGroup = (props: ContextMenuPrimitive.Group.Props) => {
  const { styles } = useContextMenuContext();
  return (
    <ContextMenuPrimitive.Group
      {...props}
      className={styles.menuGroup({ className: cn(props.className) })}
    />
  );
};

export const ContextMenuGroupLabel = (
  props: ContextMenuPrimitive.GroupLabel.Props,
) => {
  const { styles } = useContextMenuContext();
  return (
    <ContextMenuPrimitive.GroupLabel
      {...props}
      className={styles.menuGroupLabel({ className: cn(props.className) })}
    />
  );
};

export const ContextMenuSeparator = (
  props: ContextMenuPrimitive.Separator.Props,
) => {
  return <ContextMenuPrimitive.Separator {...props} />;
};

export const ContextMenuCheckboxItem = (
  props: ContextMenuPrimitive.CheckboxItem.Props,
) => {
  const { styles } = useContextMenuContext();
  return (
    <ContextMenuPrimitive.CheckboxItem
      {...props}
      className={styles.menuItem({ className: cn(props.className) })}
    />
  );
};

export const ContextMenuRadioGroup = (
  props: ContextMenuPrimitive.RadioGroup.Props,
) => {
  return <ContextMenuPrimitive.RadioGroup {...props} />;
};

export const ContextMenuRadioItem = (
  props: ContextMenuPrimitive.RadioItem.Props,
) => {
  const { styles } = useContextMenuContext();
  return (
    <ContextMenuPrimitive.RadioItem
      {...props}
      className={styles.menuItem({ className: cn(props.className) })}
    />
  );
};

export const ContextMenuCheckboxItemIndicator = (
  props: ContextMenuPrimitive.CheckboxItemIndicator.Props,
) => {
  const { styles } = useContextMenuContext();
  const { children = <CheckIcon />, className, ...restProps } = props;
  return (
    <ContextMenuPrimitive.CheckboxItemIndicator
      {...restProps}
      className={styles.menuItemIndicator({ className: cn(className) })}
    >
      {children}
    </ContextMenuPrimitive.CheckboxItemIndicator>
  );
};

export const ContextMenuRadioItemIndicator = (
  props: ContextMenuPrimitive.RadioItemIndicator.Props,
) => {
  const { styles } = useContextMenuContext();
  const { children = <CheckIcon />, className, ...restProps } = props;
  return (
    <ContextMenuPrimitive.RadioItemIndicator
      {...restProps}
      className={styles.menuItemIndicator({ className: cn(className) })}
    >
      {children}
    </ContextMenuPrimitive.RadioItemIndicator>
  );
};

export const ContextMenuSubmenuIndicator = (
  props: React.ComponentProps<"div">,
) => {
  const { styles } = useContextMenuContext();
  return (
    <div
      {...props}
      className={styles.submenuIndicator({ className: cn(props.className) })}
    />
  );
};

export const ContextMenuArrow = (props: ContextMenuPrimitive.Arrow.Props) => {
  const { styles } = useContextMenuContext();
  const { children = <ArrowSvg />, className, ...restProps } = props;
  return (
    <ContextMenuPrimitive.Arrow
      {...restProps}
      className={styles.arrow({ className: cn(className) })}
    >
      {children}
    </ContextMenuPrimitive.Arrow>
  );
};

export const ContextMenuSubmenuRoot = (
  props: ContextMenuPrimitive.SubmenuRoot.Props,
) => {
  return <ContextMenuPrimitive.SubmenuRoot {...props} />;
};

export const ContextMenuSubmenuTrigger = (
  props: ContextMenuPrimitive.SubmenuTrigger.Props,
) => {
  const { styles } = useContextMenuContext();
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      {...props}
      className={styles.menuItem({ className: cn(props.className) })}
    />
  );
};

export const ContextMenuSubmenuContent = (
  props: ContextMenuSubmenuContent.Props,
) => {
  const { styles } = useContextMenuContext();
  const { slotProps, ...restProps } = props;
  return (
    <ContextMenuPrimitive.Portal {...slotProps?.portal}>
      <ContextMenuPrimitive.Positioner
        sideOffset={getOffset}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <ContextMenuPrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
};

function getOffset({
  side,
}: {
  side: ContextMenuPrimitive.Positioner.Props["side"];
}) {
  return side === "top" || side === "bottom" ? 4 : -4;
}

export namespace ContextMenuSubmenuContent {
  export interface Props extends ContextMenuPrimitive.Popup.Props {
    slotProps?: {
      portal?: ContextMenuPrimitive.Portal.Props;
      positioner?: ContextMenuPrimitive.Positioner.Props;
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
