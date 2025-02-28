import { type HeaderProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    header?: Partial<HeaderProps>;
  }
}
