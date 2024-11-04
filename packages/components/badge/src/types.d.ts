import { type BadgeProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    badge?: Partial<BadgeProps>;
  }
}
