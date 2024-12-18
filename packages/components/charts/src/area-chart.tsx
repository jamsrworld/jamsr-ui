"use client";

import {
  Area,
  AreaChartCore,
  CartesianGrid,
  XAxis,
  YAxis,
  type AreaChartCoreProps,
  type AreaProps,
  type CartesianGridProps,
  type ResponsiveContainerProps,
  type XAxisProps,
  type YAxisProps,
} from "@jamsr-ui/chart";
import { ChartContainer } from "./chart-container";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { type ChartConfig } from "./types";

export type AreaChartProps = Pick<
  ResponsiveContainerProps,
  "width" | "height"
> & {
  chartData: any[];
  config: ChartConfig;
  children?: React.ReactNode;
  responsiveContainer?: ResponsiveContainerProps;
  areaChart?: AreaChartCoreProps;
  cartesianGrid?: false | CartesianGridProps;
  xAxis?: false | XAxisProps;
  yAxis?: false | YAxisProps;
  area?: AreaProps | ((key: string) => AreaProps);
  tooltip?: false | TooltipProps;
};

export const AreaChart = (props: AreaChartProps) => {
  const {
    chartData,
    config,
    children,
    responsiveContainer,
    areaChart,
    cartesianGrid,
    xAxis,
    yAxis,
    area,
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
      <AreaChartCore data={chartData} {...areaChart}>
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
            <Area
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
              {...(typeof area === "function" ? area?.(key) : area)}
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
      </AreaChartCore>
    </ChartContainer>
  );
};
