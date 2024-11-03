import { type InputProps } from "./input";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    input?: Pick<InputProps, "className" | "classNames">;
  }
}
