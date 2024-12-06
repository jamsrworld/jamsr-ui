import { type IconButtonProps } from "./icon-button";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    iconButton?: Partial<IconButtonProps>;
  }
}
