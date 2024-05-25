import React from "react";
import {
  RadioGroupContext,
  type RadioGroupContextType,
} from "./use-radio-group";

type Props = RadioGroupContextType & {
  children: React.ReactNode;
};

export const RadioGroup = (props: Props) => {
  const { children, ...restProps } = props;
  return (
    <RadioGroupContext.Provider value={restProps}>
      {children}
    </RadioGroupContext.Provider>
  );
};
