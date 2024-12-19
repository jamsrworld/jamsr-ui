"use client";

import { type ComponentProps } from "react";
import {
  CartesianGrid,
  Line,
  LineChart as LineChartCore,
  XAxis,
  YAxis,
  type CartesianGridProps,
  type LineProps,
  type ResponsiveContainerProps,
  type XAxisProps,
  type YAxisProps,
} from "recharts";
import { ChartContainer } from "./chart-container";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { chartStyles } from "./styles";
import { type ChartConfig } from "./types";

type LineChartCoreProps = ComponentProps<typeof LineChartCore>;
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
  line?: LineProps | ((key: string) => LineProps);
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
        {cartesianGrid !== false && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--ui-divider))"
            vertical={false}
            {...cartesianGrid}
          />
        )}
        {xAxis !== false && <XAxis {...chartStyles.xAxis(xAxis)} />}
        {yAxis !== false && <YAxis {...chartStyles.yAxis(yAxis)} />}
        {tooltip !== false && <ChartTooltip {...tooltip} />}
        {Object.entries(config).map(([key, value]) => {
          const { color, colors } = value;
          const strokeColor = Array.isArray(color)
            ? `url(#${key}Gradient)`
            : color;
          const fillColor = Array.isArray(colors)
            ? `url(#${key}Gradient)`
            : strokeColor;
          const lineProps = typeof line === "function" ? line?.(key) : line;
          return (
            // @ts-expect-error TypeError
            <Line
              key={key}
              dataKey={key}
              fill={fillColor}
              stroke={strokeColor}
              {...chartStyles.line({
                ...lineProps,
                activeDot: {
                  ...(lineProps?.activeDot as object),
                  fill: strokeColor,
                  stroke: "hsl(var(--ui-background))",
                  strokeWidth: 2,
                },
              })}
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
