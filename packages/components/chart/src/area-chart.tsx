import { type ComponentProps } from "react";
import { AreaChart as AreaChartBase } from "recharts";

export type AreaChartCoreProps = Omit<
  ComponentProps<typeof AreaChartBase>,
  "children"
>;

export const AreaChartCore = (
  props: { children: React.ReactNode } & AreaChartCoreProps,
) => {
  const { children, ...restProps } = props;
  return (
    <AreaChartBase accessibilityLayer {...restProps}>
      {children}
    </AreaChartBase>
  );
};
