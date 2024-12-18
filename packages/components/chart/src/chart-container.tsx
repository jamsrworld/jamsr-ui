import { useMemo } from "react";
import {
  ResponsiveContainer,
  type ResponsiveContainerProps as Props,
} from "recharts";
import { type ChartConfig } from "./types";
import { ChartContext, type ChartContextProps } from "./use-chart";

export type ResponsiveContainerProps = Props;

type ChartContainerProps = ResponsiveContainerProps & {
  config: ChartConfig;
  children: React.ReactElement;
};

export const ChartContainer = (props: ChartContainerProps) => {
  const { config, children, ...restProps } = props;
  const value: ChartContextProps = useMemo(() => {
    return { config };
  }, [config]);
  return (
    <ChartContext.Provider value={value}>
      <ResponsiveContainer {...restProps}>{children}</ResponsiveContainer>
    </ChartContext.Provider>
  );
};
