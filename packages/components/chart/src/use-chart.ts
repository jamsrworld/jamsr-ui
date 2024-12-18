import { createContext, useContext } from "react";
import { type ChartConfig } from "./types";

export type ChartContextProps = {
  config: ChartConfig;
};
export const ChartContext = createContext<ChartContextProps | null>(null);

export const useChart = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
};
