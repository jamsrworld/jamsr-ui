import { type CheckboxProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    checkbox?: Pick<CheckboxProps, "className" | "classNames">;
  }
}
