import { type SelectProps } from "./select";
import { type SelectItemProps } from "./select-item";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    select?: Partial<SelectProps>;
    selectItem?: Partial<SelectItemProps>;
  }
}
