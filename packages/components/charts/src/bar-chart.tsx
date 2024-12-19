"use client";

import { type ComponentProps } from "react";
import {
  Bar,
  BarChart as BarChartCore,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  type BarProps,
  type CartesianGridProps,
  type LegendProps,
  type ResponsiveContainerProps,
  type XAxisProps,
  type YAxisProps,
} from "recharts";
import { ChartContainer } from "./chart-container";
import { ChartLegend } from "./chart-legend";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { chartStyles } from "./styles";
import { type ChartConfig } from "./types";
import { useLegend } from "./use-legend";

type BarChartCoreProps = ComponentProps<typeof BarChartCore>;
export type BarChartProps = Pick<ResponsiveContainerProps, "width" | "height"> &
  Pick<BarChartCoreProps, "layout"> & {
    chartData: any[];
    config: ChartConfig;
    children?: React.ReactNode;
    responsiveContainer?: Partial<ResponsiveContainerProps>;
    barChart?: Partial<BarChartCoreProps>;
    cartesianGrid?: false | Partial<CartesianGridProps>;
    xAxis?: false | Partial<XAxisProps>;
    yAxis?: false | Partial<YAxisProps>;
    bar?: Partial<BarProps> | ((key: string) => Partial<BarProps>);
    tooltip?: false | TooltipProps;
    legend?: false | Partial<LegendProps>;
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
    legend = Object.keys(config).length > 1 ? {} : false,
  } = props;
  const gradients = Object.entries(config).filter(([, value]) => {
    return Array.isArray(value.colors);
  });

  const {
    filteredConfig,
    handleLegendClick,
    hoveredLegend,
    onMouseEnter,
    onMouseLeave,
    clickedLegends,
  } = useLegend(config);
  return (
    <ChartContainer
      height={height}
      width={width}
      config={config}
      {...responsiveContainer}
    >
      <BarChartCore data={chartData} layout={layout} {...barChart}>
        {legend !== false && (
          <Legend
            /*  eslint-disable-next-line react/no-unstable-nested-components */
            content={() => (
              <ChartLegend
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={handleLegendClick}
                filteredLegends={clickedLegends}
              />
            )}
          />
        )}
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
        {Object.entries(filteredConfig).map(([key, value], idx) => {
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
              {...(hoveredLegend === key && {
                fillOpacity: 0.2,
              })}
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
