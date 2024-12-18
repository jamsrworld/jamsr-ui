import { type ComponentProps } from "react";
import { CartesianGrid as CartesianGridBase } from "recharts";

export type CartesianGridProps = ComponentProps<typeof CartesianGridBase>;
export const CartesianGrid = (props: CartesianGridProps) => {
  return <CartesianGridBase vertical={false} {...props} />;
};
