"use client";

import { type ComponentProps } from "react";
import {
  Area,
  AreaChart as AreaChartBase,
  type AreaProps,
  CartesianGrid,
  type CartesianGridProps,
  Legend,
  type LegendProps,
  type ResponsiveContainerProps,
  XAxis,
  type XAxisProps,
  YAxis,
  type YAxisProps,
} from "recharts";
import { ChartContainer } from "./chart-container";
import { ChartLegend } from "./chart-legend";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { chartStyles } from "./styles";
import { type ChartConfig } from "./types";
import { useLegend } from "./use-legend";

type AriaChartBaseProps = ComponentProps<typeof AreaChartBase>;

export type AreaChartProps = Pick<
  ResponsiveContainerProps,
  "width" | "height"
> & {
  chartData: any[];
  config: ChartConfig;
  children?: React.ReactNode;
  responsiveContainer?: Partial<ResponsiveContainerProps>;
  areaChart?: Partial<AriaChartBaseProps>;
  cartesianGrid?: false | Partial<CartesianGridProps>;
  xAxis?: false | Partial<XAxisProps>;
  yAxis?: false | Partial<YAxisProps>;
  area?: Partial<AreaProps> | ((key: string) => Partial<AreaProps>);
  tooltip?: false | Partial<TooltipProps>;
  legend?: false | Partial<LegendProps>;
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
      <AreaChartBase data={chartData} {...areaChart}>
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
            strokeDasharray="3 3"
            stroke="hsl(var(--ui-divider))"
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
          const areaProps = typeof area === "function" ? area?.(key) : area;
          return (
            // @ts-expect-error typeerror
            <Area
              key={key}
              dataKey={key}
              fill={fillColor}
              stroke={strokeColor}
              {...(hoveredLegend === key && {
                fillOpacity: 0.2,
                strokeOpacity: 0.2,
              })}
              // fillOpacity={hoveredLegend === key ? 0.5 : 1}
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
