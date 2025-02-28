import { type CheckboxProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    checkbox?: Partial<CheckboxProps>;
  }
}
