"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";

import { navigationMenuStyles } from "./styles";
import { cn } from "../utils/cn";

const styles = navigationMenuStyles();

export const NavigationMenu = (props: NavigationMenuPrimitive.Root.Props) => {
  return (
    <NavigationMenuPrimitive.Root
      {...props}
      className={styles.root({ className: cn(props.className) })}
    />
  );
};

export namespace NavigationMenu {
  export interface Props extends NavigationMenuPrimitive.Root.Props {}
}

export const NavigationMenuList = (
  props: NavigationMenuPrimitive.List.Props,
) => {
  return (
    <NavigationMenuPrimitive.List
      {...props}
      className={styles.list({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuItem = (
  props: NavigationMenuPrimitive.Item.Props,
) => {
  return (
    <NavigationMenuPrimitive.Item
      {...props}
      className={cn("group", props.className)}
    />
  );
};

export const NavigationMenuTrigger = (
  props: NavigationMenuPrimitive.Trigger.Props,
) => {
  return (
    <NavigationMenuPrimitive.Trigger
      {...props}
      className={styles.trigger({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuIcon = (
  props: NavigationMenuPrimitive.Icon.Props,
) => {
  return (
    <NavigationMenuPrimitive.Icon
      {...props}
      className={styles.icon({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuContent = (
  props: NavigationMenuPrimitive.Content.Props,
) => {
  return (
    <NavigationMenuPrimitive.Content
      {...props}
      className={styles.content({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuLink = (
  props: NavigationMenuPrimitive.Link.Props,
) => {
  return (
    <NavigationMenuPrimitive.Link
      {...props}
      className={styles.link({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuPortal = (
  props: NavigationMenuPrimitive.Portal.Props,
) => {
  return <NavigationMenuPrimitive.Portal {...props} />;
};

export const NavigationMenuBackdrop = (
  props: NavigationMenuPrimitive.Backdrop.Props,
) => {
  return (
    <NavigationMenuPrimitive.Backdrop
      {...props}
      className={styles.backdrop({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuPositioner = (
  props: NavigationMenuPrimitive.Positioner.Props,
) => {
  return (
    <NavigationMenuPrimitive.Positioner
      sideOffset={8}
      {...props}
      className={styles.positioner({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuPopup = (
  props: NavigationMenuPrimitive.Popup.Props,
) => {
  return (
    <NavigationMenuPrimitive.Popup
      {...props}
      className={styles.popup({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuViewport = (
  props: NavigationMenuPrimitive.Viewport.Props,
) => {
  return (
    <NavigationMenuPrimitive.Viewport
      {...props}
      className={styles.viewport({ className: cn(props.className) })}
    />
  );
};

export const NavigationMenuArrow = (
  props: NavigationMenuPrimitive.Arrow.Props,
) => {
  const { children = <ArrowSvg />, className, ...restProps } = props;
  return (
    <NavigationMenuPrimitive.Arrow
      {...restProps}
      className={styles.arrow({ className: cn(className) })}
    >
      {children}
    </NavigationMenuPrimitive.Arrow>
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
