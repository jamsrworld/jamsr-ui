import { type ChipProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    chip?: Partial<ChipProps>;
  }
}
