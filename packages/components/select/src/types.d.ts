import { type SelectProps } from "./select";
import { type SelectItemProps } from "./select-item";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    select?: Partial<SelectProps>;
    selectItem?: Partial<SelectItemProps>;
  }
}
