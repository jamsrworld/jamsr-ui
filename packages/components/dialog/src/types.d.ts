import { type DialogProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    dialog?: Pick<DialogProps, "className" | "classNames">;
  }
}
