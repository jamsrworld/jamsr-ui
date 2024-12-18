import {
  ResponsiveContainer,
  type ResponsiveContainerProps,
} from "@jamsr-ui/chart";
import { useMemo } from "react";
import { type ChartConfig } from "./types";
import { ChartContext, type ChartContextProps } from "./use-chart";

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
