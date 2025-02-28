import { type ButtonProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    button?: Partial<ButtonProps>;
  }
}
