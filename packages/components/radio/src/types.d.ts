import { type RadioGroupProps, type RadioProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    radio?: Partial<RadioProps>;
    radioGroup?: Partial<RadioGroupProps>;
  }
}
