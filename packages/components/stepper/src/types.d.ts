import { type StepperProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    stepper?: Partial<StepperProps>;
  }
}
