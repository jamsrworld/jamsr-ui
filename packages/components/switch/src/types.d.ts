import { type SwitchProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    switch?: Partial<SwitchProps>;
  }
}
