import { type RadioProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    radio?: Pick<RadioProps, "className" | "classNames">;
  }
}
