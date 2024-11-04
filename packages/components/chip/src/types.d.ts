import { type ChipProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    chip?: Pick<ChipProps, "className">;
  }
}
