import { type SVGAttributes } from "react";

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color:
      | string
      | {
          stopColor: string;
          stopOpacity?: number;
          offset?: SVGAttributes<"stop">["offset"];
        }[];
    colors?: {
      stopColor: string;
      stopOpacity?: number;
      offset?: SVGAttributes<"stop">["offset"];
    }[];
  };
};
