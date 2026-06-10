import {
  Sidebar as SidebarRoot,
  SidebarBackdrop,
  SidebarBody,
  SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarStateProvider,
  SidebarToggle,
  SidebarWrapper,
  useSidebarState,
} from "./sidebar";

import type { VariantProps } from "tailwind-variants";

import type { sidebarStyles } from "./styles";

export const Sidebar: typeof SidebarRoot & {
  Backdrop: typeof SidebarBackdrop;
  Body: typeof SidebarBody;
  Container: typeof SidebarContainer;
  Content: typeof SidebarContent;
  Footer: typeof SidebarFooter;
  Group: typeof SidebarGroup;
  GroupLabel: typeof SidebarGroupLabel;
  Header: typeof SidebarHeader;
  Inset: typeof SidebarInset;
  Menu: typeof SidebarMenu;
  MenuItem: typeof SidebarMenuItem;
  MenuItemButton: typeof SidebarMenuItemButton;
  StateProvider: typeof SidebarStateProvider;
  Toggle: typeof SidebarToggle;
  Wrapper: typeof SidebarWrapper;
} = Object.assign(SidebarRoot, {
  Backdrop: SidebarBackdrop,
  Body: SidebarBody,
  Container: SidebarContainer,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  MenuItemButton: SidebarMenuItemButton,
  StateProvider: SidebarStateProvider,
  Toggle: SidebarToggle,
  Wrapper: SidebarWrapper,
});

export namespace Sidebar {
  export type Variants = VariantProps<typeof sidebarStyles>;
  export interface Props extends React.ComponentProps<typeof SidebarRoot> {}
  export interface Backdrop extends SidebarBackdrop.Props {}
  export interface Body extends SidebarBody.Props {}
  export interface Container extends SidebarContainer.Props {}
  export interface Content extends SidebarContent.Props {}
  export interface Footer extends SidebarFooter.Props {}
  export interface Group extends SidebarGroup.Props {}
  export interface GroupLabel extends SidebarGroupLabel.Props {}
  export interface Header extends SidebarHeader.Props {}
  export interface Inset extends SidebarInset.Props {}
  export interface Menu extends SidebarMenu.Props {}
  export interface MenuItem extends SidebarMenuItem.Props {}
  export interface MenuItemButton extends SidebarMenuItemButton.Props {}
  export interface StateProvider extends SidebarStateProvider.Props {}
  export interface Toggle extends SidebarToggle.Props {}
  export interface Wrapper extends SidebarWrapper.Props {}
}

export {
  SidebarBackdrop,
  SidebarBody,
  SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarStateProvider,
  SidebarToggle,
  SidebarWrapper,
  useSidebarState,
};
