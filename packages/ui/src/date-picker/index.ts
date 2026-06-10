import { DatePicker as DatePickerRoot } from "./date-picker";

import type { VariantProps } from "tailwind-variants";

import type { datePickerStyles } from "./styles";

export const DatePicker = Object.assign(DatePickerRoot, {});

export namespace DatePicker {
  export type Variants = VariantProps<typeof datePickerStyles>;
  export interface Props extends DatePickerRoot.Props {}
}
