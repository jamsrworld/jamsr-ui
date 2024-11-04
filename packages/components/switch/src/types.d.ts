import { type SwitchProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    switch?: Partial<SwitchProps>;
  }
}
