import { type ComponentProps } from "react";
import { BarChart as BarChartBase } from "recharts";

export type BarChartCoreProps = Omit<
  ComponentProps<typeof BarChartBase>,
  "children"
>;

export const BarChartCore = (
  props: { children: React.ReactNode } & BarChartCoreProps,
) => {
  const { children, ...restProps } = props;
  return (
    <BarChartBase
      accessibilityLayer
      barGap={4}
      barCategoryGap={4}
      {...restProps}
    >
      {children}
    </BarChartBase>
  );
};
