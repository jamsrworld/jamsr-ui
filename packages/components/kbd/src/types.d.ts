import { type KbdProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    kbd?: Partial<KbdProps>;
  }
}
