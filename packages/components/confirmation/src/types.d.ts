import { type ConfirmationProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    confirmation?: Partial<ConfirmationProps>;
  }
}
