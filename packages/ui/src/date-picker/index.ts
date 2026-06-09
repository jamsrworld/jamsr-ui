import type { VariantProps } from "tailwind-variants";
import { datePickerStyles } from "./styles";
import { DatePicker as DatePickerRoot } from "./date-picker";

export const DatePicker = Object.assign(DatePickerRoot, {});

export namespace DatePicker {
  export type Variants = VariantProps<typeof datePickerStyles>;
  export interface Props extends DatePickerRoot.Props {}
}
