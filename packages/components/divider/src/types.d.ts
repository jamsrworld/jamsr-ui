import { type DividerProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    divider?: Pick<DividerProps, "className" | "classNames">;
  }
}
