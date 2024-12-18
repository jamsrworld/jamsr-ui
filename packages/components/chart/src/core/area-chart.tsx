import { type ComponentProps } from "react";
import { AreaChart as AreaChartBase } from "recharts";

export const AreaChart = (
  props: { children: React.ReactNode } & Omit<
    ComponentProps<typeof AreaChartBase>,
    "children"
  >,
) => {
  const { children, ...restProps } = props;
  return (
    <AreaChartBase
      accessibilityLayer
      margin={{
        left: -25,
      }}
      {...restProps}
    >
      {children}
    </AreaChartBase>
  );
};
