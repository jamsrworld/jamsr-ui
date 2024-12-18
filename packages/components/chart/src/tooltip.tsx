import { Tooltip as TooltipBase, type TooltipProps as Props } from "recharts";
import {
  type NameType,
  type ValueType,
} from "recharts/types/component/DefaultTooltipContent";

export type ChartTooltipCoreProps = Props<ValueType, NameType>;
export const ChartTooltipCore = TooltipBase;
