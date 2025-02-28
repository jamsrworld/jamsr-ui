import { type MenuItemProps, type MenuProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    menu?: Partial<MenuProps>;
    menuItem?: Partial<MenuItemProps>;
  }
}
