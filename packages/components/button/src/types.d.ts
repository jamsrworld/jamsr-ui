import { type ButtonProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    button?: Pick<ButtonProps, "className" | "classNames">;
  }
}
