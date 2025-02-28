import { type TextareaProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    textarea?: Partial<TextareaProps>;
  }
}
