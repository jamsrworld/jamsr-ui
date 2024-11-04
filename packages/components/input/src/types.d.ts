import { type InputProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    input?: Partial<InputProps>;
  }
}
