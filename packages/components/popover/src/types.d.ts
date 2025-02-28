import { type PopoverProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    popover?: Partial<PopoverProps>;
  }
}
