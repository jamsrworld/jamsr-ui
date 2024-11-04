import { type PopoverProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    popover?: Partial<PopoverProps>;
  }
}
