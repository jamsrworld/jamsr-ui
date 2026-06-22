import {
  NavigationMenu as NavigationMenuRoot,
  NavigationMenuArrow,
  NavigationMenuBackdrop,
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./navigation-menu";

import type { VariantProps } from "tailwind-variants";

import type { navigationMenuStyles } from "./styles";

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Icon: NavigationMenuIcon,
  Content: NavigationMenuContent,
  Link: NavigationMenuLink,
  Portal: NavigationMenuPortal,
  Backdrop: NavigationMenuBackdrop,
  Positioner: NavigationMenuPositioner,
  Popup: NavigationMenuPopup,
  Viewport: NavigationMenuViewport,
  Arrow: NavigationMenuArrow,
});

export namespace NavigationMenu {
  export type Variants = VariantProps<typeof navigationMenuStyles>;
  export interface Props extends NavigationMenuRoot.Props {}
}
