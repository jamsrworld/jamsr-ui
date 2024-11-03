import { type TextareaProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    textarea?: Pick<TextareaProps, "className" | "classNames">;
  }
}
