import { type ConfirmationProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    confirmation?: Partial<ConfirmationProps>;
  }
}
