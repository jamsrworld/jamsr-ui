import { type KbdProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    kbd?: Partial<KbdProps>;
  }
}
