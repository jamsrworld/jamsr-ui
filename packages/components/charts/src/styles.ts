import {
  type AreaProps,
  type BarProps,
  type LegendProps,
  type LineProps,
  type XAxisProps,
  type YAxisProps,
} from "recharts";

// Define a type for chartStyles
type ChartStyles = {
  xAxis: (props?: Partial<XAxisProps>) => XAxisProps;
  yAxis: (props?: Partial<YAxisProps>) => YAxisProps;
  area: (props?: Partial<AreaProps>) => Partial<AreaProps>;
  line: (props?: Partial<LineProps>) => Partial<LineProps>;
  bar: (props?: Partial<BarProps>) => Partial<BarProps>;
  legend: (props?: Partial<LegendProps>) => LegendProps;
};

export const chartStyles: ChartStyles = {
  xAxis: (props) => ({
    tickLine: false,
    axisLine: false,
    tickMargin: 10,
    ...props,
    tick: {
      fill: "var(--ui-default-500)",
      ...(props?.tick as object),
      style: {
        fontSize: "var(--ui-fs-xs)",
        ...props?.style,
      },
    },
  }),
  yAxis: (props) => ({
    axisLine: false,
    tickLine: false,
    ...props,
    tick: {
      fill: "var(--ui-default-400)",
      ...(props?.tick as object),
      style: {
        fontSize: "var(--ui-fs-xs)",
        ...props?.style,
      },
    },
  }),
  area: (props) => ({
    type: "monotone",
    strokeWidth: 2,
    ...props,
    activeDot: {
      strokeWidth: 2,
      r: 6,
      ...(props?.activeDot as object),
    },
  }),
  line: (props) => ({
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
  }),
  bar: (props) => ({
    barSize: 32,
    ...props,
  }),
  legend: (props) => ({
    iconType: "circle",
    iconSize: 10,
    align: "center",
    verticalAlign: "bottom",
    height: 32,
    margin: { top: 20 },
    ...props,
  }),
} as const;
