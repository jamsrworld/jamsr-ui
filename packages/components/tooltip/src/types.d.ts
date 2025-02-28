import { type TooltipProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    tooltip?: Partial<TooltipProps>;
  }
}
