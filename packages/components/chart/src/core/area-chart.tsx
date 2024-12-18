import { type ComponentProps } from "react";
import { AreaChart as AreaChartBase } from "recharts";

export type AreaChartProps = Omit<
  ComponentProps<typeof AreaChartBase>,
  "children"
>;

export const AreaChart = (
  props: { children: React.ReactNode } & AreaChartProps,
) => {
  const { children, ...restProps } = props;
  return (
    <AreaChartBase accessibilityLayer {...restProps}>
      {children}
    </AreaChartBase>
  );
};
