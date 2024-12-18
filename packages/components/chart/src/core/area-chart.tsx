import { type ComponentProps } from "react";
import { AreaChart as AreaChartBase } from "recharts";

export const AreaChart = (props: ComponentProps<typeof AreaChartBase>) => {
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
