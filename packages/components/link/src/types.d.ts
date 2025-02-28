import { type LinkProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    link?: Partial<LinkProps>;
  }
}
