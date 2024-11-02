"use client";

import { type UIStyleContextType } from "@jamsr-ui/types";
import { createContext, useContext } from "react";

const UIStyleContext = createContext<UIStyleContextType>(
  {} as unknown as UIStyleContextType,
);

type Props = {
  children: React.ReactNode;
} & UIStyleContextType;

export { type UIStyleContextType } from "@jamsr-ui/types";
export const UIStyleProvider = (props: Props) => {
  const { children, ...restProps } = props;
  return (
    <UIStyleContext.Provider value={restProps}>{children}</UIStyleContext.Provider>
  );
};

export const useUIStyle = () => {
  const context = useContext(UIStyleContext);
  if (!context) {
    throw new Error("useUIStyle must be used within a UIStyleProvider");
  }
  return context;
};
