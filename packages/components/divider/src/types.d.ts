import { type DividerProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    divider?: Partial<DividerProps>;
  }
}
