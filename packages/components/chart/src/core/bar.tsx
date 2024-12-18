import { type ComponentProps } from "react";
import { Bar as BarBase } from "recharts";

export const Bar = (props: ComponentProps<typeof BarBase>) => {
  return <BarBase {...props} />;
};
