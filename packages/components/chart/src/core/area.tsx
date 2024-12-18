import { type ComponentProps } from "react";
import { Area as AreaBase } from "recharts";

export const Area = (props: ComponentProps<typeof AreaBase>) => {
  return (
    <AreaBase
      type="monotone"
      stroke="hsl(var(--ui-success))"
      strokeWidth={2}
      activeDot={{
        stroke: `hsl(var(--ui-success))`,
        strokeWidth: 2,
        fill: `hsl(var(--ui-background))`,
        r: 5,
      }}
      {...props}
    />
  );
};
Area.defaultProps = AreaBase.defaultProps;
