import { type MenuItemProps, type MenuProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    menu?: Partial<MenuProps>;
    menuItem?: Partial<MenuItemProps>;
  }
}
