import { type SelectProps } from "./select";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    select?: Pick<SelectProps, "className" | "classNames">;
  }
}
