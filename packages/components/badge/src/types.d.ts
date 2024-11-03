import { type BadgeProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    badge?: Pick<BadgeProps, "className" | "classNames">;
  }
}
