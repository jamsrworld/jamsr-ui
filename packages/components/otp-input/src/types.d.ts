import { type OtpInputProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    otpInput?: Partial<OtpInputProps>;
  }
}
