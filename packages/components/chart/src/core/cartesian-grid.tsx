import { type ComponentProps } from "react";
import { CartesianGrid as CartesianGridBase } from "recharts";

export const CartesianGrid = (
  props: ComponentProps<typeof CartesianGridBase>,
) => {
  return (
    <CartesianGridBase
      vertical={false}
      strokeDasharray="3 3"
      strokeOpacity={0.25}
      {...props}
    />
  );
};
