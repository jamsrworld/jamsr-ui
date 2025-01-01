import { createContext } from "@jamsr-ui/utils";
import type { ContextType } from "./use-radio-group";

export const [RadioGroupProvider, useRadioGroupContext] = createContext<
  ContextType | undefined
>({
  name: "RadioGroupContext",
  strict: false,
  errorMessage: "useRadioGroupContext must be used within a RadioGroup",
});
