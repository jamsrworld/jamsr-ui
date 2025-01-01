import { type TextProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    text?: Partial<TextProps>;
  }
}
