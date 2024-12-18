import { type ComponentProps } from "react";
import { YAxis as YAxisBase } from "recharts";

export const YAxis = (props: ComponentProps<typeof YAxisBase>) => {
  return (
    <YAxisBase
      axisLine={false}
      tickLine={false}
      tick={{
        fill: "hsl(var(--ui-default-400))",
        style: {
          fontSize: "var(--fs-xs)",
        },
      }}
      {...props}
    />
  );
};
YAxis.defaultProps = YAxisBase.defaultProps;
