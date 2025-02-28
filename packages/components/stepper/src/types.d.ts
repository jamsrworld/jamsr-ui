import { type StepperProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    stepper?: Partial<StepperProps>;
  }
}
