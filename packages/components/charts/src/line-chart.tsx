"use client";

import { type ComponentProps } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as LineChartCore,
  XAxis,
  YAxis,
  type CartesianGridProps,
  type LegendProps,
  type LineProps,
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

type LineChartCoreProps = ComponentProps<typeof LineChartCore>;
export type LineChartProps = Pick<
  ResponsiveContainerProps,
  "width" | "height"
> & {
  chartData: any[];
  config: ChartConfig;
  children?: React.ReactNode;
  responsiveContainer?: Partial<ResponsiveContainerProps>;
  lineChart?: Partial<LineChartCoreProps>;
  cartesianGrid?: false | Partial<CartesianGridProps>;
  xAxis?: false | Partial<XAxisProps>;
  yAxis?: false | Partial<YAxisProps>;
  line?: Partial<LineProps> | ((key: string) => Partial<LineProps>);
  tooltip?: false | Partial<TooltipProps>;
  legend?: false | Partial<LegendProps>;
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
      <LineChartCore data={chartData} {...lineChart}>
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
            strokeDasharray="3 3"
            stroke="var(--ui-divider)"
            vertical={false}
            {...cartesianGrid}
          />
        )}
        {xAxis !== false && <XAxis {...chartStyles.xAxis(xAxis)} />}
        {yAxis !== false && <YAxis {...chartStyles.yAxis(yAxis)} />}
        {tooltip !== false && <ChartTooltip {...tooltip} />}
        {Object.entries(filteredConfig).map(([key, value]) => {
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
              {...(hoveredLegend === key && {
                strokeOpacity: 0.2,
              })}
              {...chartStyles.line({
                ...lineProps,
                dot: {
                  fillOpacity: hoveredLegend === key ? 0 : undefined,
                  ...(lineProps?.dot as object),
                },
                activeDot: {
                  fill: strokeColor,
                  stroke: "var(--ui-background)",
                  strokeWidth: 2,
                  ...(lineProps?.activeDot as object),
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
