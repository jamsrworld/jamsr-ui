"use client";

import { createContext, useContext } from "react";

export interface UIStyleContextType {}
const UIStyleContext = createContext<UIStyleContextType>(
  {} as unknown as UIStyleContextType,
);

type Props = {
  children: React.ReactNode;
} & UIStyleContextType;

export const UIStyleProvider = (props: Props) => {
  const { children, ...restProps } = props;
  return (
    <UIStyleContext.Provider value={restProps}>
      {children}
    </UIStyleContext.Provider>
  );
};

export const useUIStyle = (): UIStyleContextType => {
  const context = useContext(UIStyleContext);
  if (!context) {
    throw new Error("useUIStyle must be used within a UIStyleProvider");
  }
  return context;
};
