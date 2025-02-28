import { type OtpInputProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    otpInput?: Partial<OtpInputProps>;
  }
}
