import { type CheckboxProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    checkbox?: Partial<CheckboxProps>;
  }
}
