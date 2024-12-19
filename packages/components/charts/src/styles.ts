import {
  type LegendProps,
  type AreaProps,
  type BarProps,
  type LineProps,
  type XAxisProps,
  type YAxisProps,
} from "recharts";

export const chartStyles = {
  xAxis: (props?: Partial<XAxisProps>) =>
    ({
      tickLine: false,
      axisLine: false,
      tickMargin: 10,
      ...props,
      tick: {
        fill: "hsl(var(--ui-default-500))",
        ...(props?.tick as object),
        style: {
          fontSize: "var(--fs-xs)",
          ...props?.style,
        },
      },
    }) satisfies XAxisProps,
  yAxis: (props?: Partial<YAxisProps>) =>
    ({
      axisLine: false,
      tickLine: false,
      ...props,
      tick: {
        fill: "hsl(var(--ui-default-400))",
        ...(props?.tick as object),
        style: {
          fontSize: "var(--fs-xs)",
          ...props?.style,
        },
      },
    }) satisfies YAxisProps,
  area: (props?: Partial<AreaProps>) =>
    ({
      type: "monotone",
      strokeWidth: 2,
      ...props,
      activeDot: {
        strokeWidth: 2,
        r: 6,
        ...(props?.activeDot as object),
      },
    }) satisfies Omit<AreaProps, "dataKey">,
  line: (props?: Partial<LineProps>) =>
    ({
      type: "monotone",
      strokeWidth: 2,
      ...props,
      activeDot: {
        strokeWidth: 2,
        r: 7,
        ...(props?.activeDot as object),
      },
      dot: {
        strokeWidth: 2,
        r: 4,
        ...(props?.dot as object),
      },
    }) satisfies LineProps,
  bar: (props?: Partial<BarProps>) =>
    ({
      barSize: 32,
      ...props,
    }) satisfies Partial<BarProps>,
  legend: (props?: Partial<LegendProps>) =>
    ({
      iconType: "circle",
      iconSize: 10,
      align: "center",
      verticalAlign: "bottom",
      height: 32,
      margin: { top: 20 },
      ...props,
    }) satisfies LegendProps,
} as const;
