import { type AlertProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    alert?: Partial<AlertProps>;
  }
}
