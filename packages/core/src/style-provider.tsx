"use client";

import { type InputSlots } from "@jamsr-ui/input";
import { type SlotsToClasses } from "@jamsr-ui/utils";
import { createContext, useContext, useMemo } from "react";

export type UIStyleContextType = {
  input?: {
    classNames: SlotsToClasses<InputSlots>;
  };
};

const UIStyleContext = createContext<UIStyleContextType>(
  {} as unknown as UIStyleContextType,
);

type Props = {
  children: React.ReactNode;
} & UIStyleContextType;

export const UIStyleProvider = (props: Props) => {
  const { children, input } = props;
  const value = useMemo(() => ({ input }), [input]);
  return (
    <UIStyleContext.Provider value={value}>{children}</UIStyleContext.Provider>
  );
};

export const useUIStyle = () => {
  const context = useContext(UIStyleContext);
  if (!context) {
    throw new Error("useUIStyle must be used within a UIStyleProvider");
  }
  return context;
};
