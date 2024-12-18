import { type ComponentProps } from "react";
import { Pie as PieBase } from "recharts";

export const Pie = (props: ComponentProps<typeof PieBase>) => {
  return <PieBase {...props} />;
};
