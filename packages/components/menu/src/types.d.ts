import { type MenuProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    menu?: Pick<MenuProps, "className" | "classNames">;
  }
}
