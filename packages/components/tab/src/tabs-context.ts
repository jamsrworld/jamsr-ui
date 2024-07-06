import type { PropGetter } from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { createContext, useContext } from "react";
import type { TabProps } from "./tab";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TabContextType<T extends string = any> = {
  onValueChange: (value: T) => void;
  selectedValue: T | null;
  getCursorProps: PropGetter<ComponentProps<"div">>;
  getTabProps: PropGetter<Partial<TabProps>>;
  getTabContentProps: PropGetter<ComponentProps<"div">>;
} | null;

export const TabContext = createContext<TabContextType<string>>(null);

export const useTabsContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Tab component must be wrapped inside <Tabs />");
  }
  return context;
};
