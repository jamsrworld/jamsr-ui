import { type TooltipProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    tooltip?: Partial<TooltipProps>;
  }
}
