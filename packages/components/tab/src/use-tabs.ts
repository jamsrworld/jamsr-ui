import { createContext, useContext } from "react";

export type TabContextType<T extends string> = {
  onValueChange: (value: T) => void;
  selectedValue: T | null;
} | null;

export const TabContext = createContext<TabContextType<string>>(null);
export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Tab component must be wrapped inside <Tabs />");
  }
  return context;
};
