import { type RadioGroupProps, type RadioProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    radio?: Partial<RadioProps>;
    radioGroup?: Partial<RadioGroupProps>;
  }
}
