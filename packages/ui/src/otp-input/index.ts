import {
  OtpInput as OtpInputRoot,
  OtpInputGroup,
  OtpInputSeparator,
  OtpInputSlot,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "./otp-input";

import type { VariantProps } from "tailwind-variants";

import type { otpInputStyles } from "./styles";

export const OtpInput = Object.assign(OtpInputRoot, {
  Group: OtpInputGroup,
  Slot: OtpInputSlot,
  Separator: OtpInputSeparator,
});

export namespace OtpInput {
  export type Variants = VariantProps<typeof otpInputStyles>;
  export interface Props extends OtpInputRoot.Props {}
  export interface Group extends OtpInputGroup.Props {}
  export interface Slot extends OtpInputSlot.Props {}
  export interface Separator extends OtpInputSeparator.Props {}
}

export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS };
