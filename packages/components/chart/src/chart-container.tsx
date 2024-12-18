import { type ComponentProps, useMemo } from "react";
import { ResponsiveContainer } from "recharts";
import { type ChartConfig } from "./types";
import { ChartContext, type ChartContextProps } from "./use-chart";

type Props = ComponentProps<typeof ResponsiveContainer> & {
  config: ChartConfig;
  children: React.ReactElement;
};

export const ChartContainer = (props: Props) => {
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
