import { type TextProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    text?: Partial<TextProps>;
  }
}
