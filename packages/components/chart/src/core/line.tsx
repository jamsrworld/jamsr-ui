import { type ComponentProps } from "react";
import { Line as LineBase } from "recharts";

export const Line = (props: ComponentProps<typeof LineBase>) => {
  return <LineBase {...props} />;
};
