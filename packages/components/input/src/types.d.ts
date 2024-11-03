import { type InputProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    input?: Pick<InputProps, "className" | "classNames">;
  }
}
