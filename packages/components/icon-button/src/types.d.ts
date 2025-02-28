import { type IconButtonProps } from "./icon-button";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    iconButton?: Partial<IconButtonProps>;
  }
}
