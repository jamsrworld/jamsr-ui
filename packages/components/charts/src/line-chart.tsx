"use client";

import {
  CartesianGrid,
  Line,
  LineChartCore,
  XAxis,
  YAxis,
  type CartesianGridProps,
  type LineChartCoreProps,
  type LineProps,
  type ResponsiveContainerProps,
  type XAxisProps,
  type YAxisProps,
} from "@jamsr-ui/chart";
import { ChartContainer } from "./chart-container";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { type ChartConfig } from "./types";

export type LineChartProps = Pick<
  ResponsiveContainerProps,
  "width" | "height"
> & {
  chartData: any[];
  config: ChartConfig;
  children?: React.ReactNode;
  responsiveContainer?: ResponsiveContainerProps;
  lineChart?: LineChartCoreProps;
  cartesianGrid?: false | CartesianGridProps;
  xAxis?: false | XAxisProps;
  yAxis?: false | YAxisProps;
  line?: (key: string) => LineProps;
  tooltip?: false | TooltipProps;
};

export const LineChart = (props: LineChartProps) => {
  const {
    chartData,
    config,
    children,
    responsiveContainer,
    lineChart,
    cartesianGrid,
    xAxis,
    yAxis,
    line,
    tooltip,
    height,
    width,
  } = props;

  const gradients = Object.entries(config).filter(([, value]) => {
    return Array.isArray(value.colors);
  });
  return (
    <ChartContainer
      height={height}
      width={width}
      config={config}
      {...responsiveContainer}
    >
      <LineChartCore data={chartData} {...lineChart}>
        {cartesianGrid !== false && <CartesianGrid {...cartesianGrid} />}
        {xAxis !== false && <XAxis {...xAxis} />}
        {yAxis !== false && <YAxis {...yAxis} />}
        {tooltip !== false && <ChartTooltip {...tooltip} />}
        {Object.entries(config).map(([key, value]) => {
          const { color, colors } = value;
          const strokeColor = Array.isArray(color)
            ? `url(#${key}Gradient)`
            : color;
          const fillColor = Array.isArray(colors)
            ? `url(#${key}Gradient)`
            : strokeColor;
          return (
            // @ts-expect-error TypeError
            <Line
              key={key}
              dataKey={key}
              fill={fillColor}
              stroke={strokeColor}
              activeDot={{
                fill: strokeColor,
                stroke: "hsl(var(--ui-background))",
                strokeWidth: 2,
                r: 6,
              }}
              {...line?.(key)}
            />
          );
        })}
        <defs>
          {gradients.map(([key, value]) => {
            if (!Array.isArray(value.colors)) return null;
            return (
              <linearGradient
                key={key}
                id={`${key}Gradient`}
                x1={0}
                x2={0}
                y1={0}
                y2={1}
              >
                {value.colors.map((color, idx) => (
                  <stop
                    key={idx}
                    offset={color.offset}
                    stopColor={color.stopColor}
                    stopOpacity={color.stopOpacity}
                  />
                ))}
              </linearGradient>
            );
          })}
        </defs>
        {children}
      </LineChartCore>
    </ChartContainer>
  );
};
