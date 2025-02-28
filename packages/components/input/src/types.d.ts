import { type InputProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    input?: Partial<InputProps>;
  }
}
