import { type DividerProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    divider?: Partial<DividerProps>;
  }
}
