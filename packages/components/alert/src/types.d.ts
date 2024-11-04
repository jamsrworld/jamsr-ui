import { type AlertProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    alert?: Partial<AlertProps>;
  }
}
