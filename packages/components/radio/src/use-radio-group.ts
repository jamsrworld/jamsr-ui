import { type ComponentPropsWithoutRef, createContext, useContext } from "react";

export type RadioGroupContextType = ComponentPropsWithoutRef<"input"> | null;

export const RadioGroupContext = createContext<RadioGroupContextType>(null);
export const useRadioGroup = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("RadioGroupItem component must be wrapped inside <RadioGroup />");
  }
  return context;
};
