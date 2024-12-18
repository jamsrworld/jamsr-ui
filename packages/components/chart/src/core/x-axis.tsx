import { type ComponentProps } from "react";
import { XAxis as XAxisBase } from "recharts";

export const XAxis = (props: ComponentProps<typeof XAxisBase>) => {
  const { defaultProps } = XAxisBase;
  return (
    <XAxisBase
      {...defaultProps}
      {...props}
      dataKey="month"
      tickLine={false}
      tick={{
        fill: "hsl(var(--ui-default-500))",
        style: {
          fontSize: "var(--fs-sm)",
        },
      }}
      tickFormatter={(value: string) => value.slice(0, 3)}
      axisLine={false}
      tickMargin={10}
    />
  );
};
XAxis.displayName = XAxisBase.displayName;
