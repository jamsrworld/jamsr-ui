import { type ComponentProps } from "react";
import { LineChart as LineChartBase } from "recharts";

export type LineChartCoreProps = Omit<
  ComponentProps<typeof LineChartBase>,
  "children"
>;

export const LineChartCore = (
  props: { children: React.ReactNode } & LineChartCoreProps,
) => {
  const { children, ...restProps } = props;
  return (
    <LineChartBase accessibilityLayer {...restProps}>
      {children}
    </LineChartBase>
  );
};
