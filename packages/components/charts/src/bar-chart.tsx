"use client";

import { ComponentProps } from "react";
import {
  Bar,
  BarChart as BarChartCore,
  CartesianGrid,
  XAxis,
  YAxis,
  type BarProps,
  type CartesianGridProps,
  type ResponsiveContainerProps,
  type XAxisProps,
  type YAxisProps,
} from "recharts";
import { ChartContainer } from "./chart-container";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { chartStyles } from "./styles";
import { type ChartConfig } from "./types";

type BarChartCoreProps = ComponentProps<typeof BarChartCore>;
export type BarChartProps = Pick<ResponsiveContainerProps, "width" | "height"> &
  Pick<BarChartCoreProps, "layout"> & {
    chartData: any[];
    config: ChartConfig;
    children?: React.ReactNode;
    responsiveContainer?: ResponsiveContainerProps;
    barChart?: BarChartCoreProps;
    cartesianGrid?: false | CartesianGridProps;
    xAxis?: false | XAxisProps;
    yAxis?: false | YAxisProps;
    bar?:
      | Omit<BarProps, "dataKey">
      | ((key: string) => Omit<BarProps, "dataKey">);
    tooltip?: false | TooltipProps;
  };

export const BarChart = (props: BarChartProps) => {
  const {
    chartData,
    config,
    children,
    responsiveContainer,
    barChart,
    cartesianGrid,
    xAxis,
    yAxis,
    bar,
    tooltip,
    height,
    width,
    layout,
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
      <BarChartCore data={chartData} layout={layout} {...barChart}>
        {cartesianGrid !== false && (
          <CartesianGrid
            vertical={false}
            stroke="hsl(var(--ui-divider))"
            {...(layout === "vertical" && {
              vertical: true,
              horizontal: false,
            })}
            {...cartesianGrid}
          />
        )}
        {xAxis !== false && (
          <XAxis
            {...(layout === "vertical" && {
              type: "number",
            })}
            {...chartStyles.xAxis(xAxis)}
          />
        )}
        {yAxis !== false && (
          <YAxis
            {...(layout === "vertical" && {
              type: "category",
            })}
            {...chartStyles.yAxis(yAxis)}
          />
        )}
        {tooltip !== false && <ChartTooltip {...tooltip} />}
        {Object.entries(config).map(([key, value], idx) => {
          const { color, colors } = value;
          const strokeColor = Array.isArray(color)
            ? `url(#${key}Gradient)`
            : color;
          const fillColor = Array.isArray(colors)
            ? `url(#${key}Gradient)`
            : strokeColor;
          const barProps = typeof bar === "function" ? bar?.(key) : bar;
          const stackId = barProps?.stackId;

          const radiusValue: BarProps["radius"] =
            layout === "vertical" ? [0, 8, 8, 0] : [8, 8, 0, 0];
          const radius: BarProps["radius"] = stackId
            ? idx === Object.values(config).length - 1
              ? radiusValue
              : 0
            : radiusValue;
          return (
            // @ts-expect-error TypeError
            <Bar
              key={key}
              dataKey={key}
              fill={fillColor}
              radius={radius}
              {...chartStyles.bar(barProps)}
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
      </BarChartCore>
    </ChartContainer>
  );
};
