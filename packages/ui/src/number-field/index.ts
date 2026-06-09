import type { VariantProps } from "tailwind-variants";
import { numberFieldStyles } from "./styles";
import {
  NumberField as NumberFieldRoot,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "./number-field";

export const NumberField = Object.assign(NumberFieldRoot, {
  Group: NumberFieldGroup,
  Input: NumberFieldInput,
  Increment: NumberFieldIncrement,
  Decrement: NumberFieldDecrement,
  ScrubArea: NumberFieldScrubArea,
});

export namespace NumberField {
  export type Variants = VariantProps<typeof numberFieldStyles>;
  export interface Props extends NumberFieldRoot.Props {}
}
