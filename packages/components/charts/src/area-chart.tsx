"use client";

import { type ComponentProps } from "react";
import {
  Area,
  AreaChart as AreaChartBase,
  type AreaProps,
  CartesianGrid,
  type CartesianGridProps,
  type ResponsiveContainerProps,
  XAxis,
  type XAxisProps,
  YAxis,
  type YAxisProps,
} from "recharts";
import { ChartContainer } from "./chart-container";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { chartStyles } from "./styles";
import { type ChartConfig } from "./types";

type AriaChartBaseProps = ComponentProps<typeof AreaChartBase>;

export type AreaChartProps = Pick<
  ResponsiveContainerProps,
  "width" | "height"
> & {
  chartData: any[];
  config: ChartConfig;
  children?: React.ReactNode;
  responsiveContainer?: ResponsiveContainerProps;
  areaChart?: AriaChartBaseProps;
  cartesianGrid?: false | CartesianGridProps;
  xAxis?: false | XAxisProps;
  yAxis?: false | YAxisProps;
  area?:
    | Omit<AreaProps, "dataKey">
    | ((key: string) => Omit<AreaProps, "dataKey">);
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
      <AreaChartBase data={chartData} {...areaChart}>
        {cartesianGrid !== false && (
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="hsl(var(--ui-divider))"
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
          const areaProps = typeof area === "function" ? area?.(key) : area;
          return (
            // @ts-expect-error typeerror
            <Area
              key={key}
              dataKey={key}
              fill={fillColor}
              stroke={strokeColor}
              {...chartStyles.area({
                ...areaProps,
                activeDot: {
                  fill: strokeColor,
                  stroke: "hsl(var(--ui-background))",
                  ...(areaProps?.activeDot as object),
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
      </AreaChartBase>
    </ChartContainer>
  );
};
