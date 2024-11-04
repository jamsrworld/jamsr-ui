import { type LinkProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    link?: Pick<LinkProps, "className">;
  }
}
