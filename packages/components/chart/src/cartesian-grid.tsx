import { type ComponentProps } from "react";
import { CartesianGrid as CartesianGridBase } from "recharts";

export type CartesianGridProps = ComponentProps<typeof CartesianGridBase>;
export const CartesianGrid = (props: CartesianGridProps) => {
  return (
    <CartesianGridBase
      vertical={false}
      strokeDasharray="3 3"
      strokeOpacity={0.25}
      {...props}
    />
  );
};
