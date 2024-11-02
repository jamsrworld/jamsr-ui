import { InputProps } from "./input";

declare module "@jamsr-ui/core" {
  export interface UIStyleContextType {
    input?: Pick<InputProps, "className" | "classNames">;
  }
}
