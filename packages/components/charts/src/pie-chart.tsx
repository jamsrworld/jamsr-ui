"use client";

import { type ComponentProps } from "react";
import {
  Cell,
  type CellProps,
  Legend,
  type LegendProps,
  Pie,
  PieChart as PieChartBase,
  type PieProps,
  type ResponsiveContainerProps,
} from "recharts";
import { ChartContainer } from "./chart-container";
import { ChartLegend } from "./chart-legend";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { type ChartConfig } from "./types";
import { useLegend } from "./use-legend";

type PieChartBaseProps = ComponentProps<typeof PieChartBase>;

export type PieChartProps = Pick<
  ResponsiveContainerProps,
  "width" | "height"
> & {
  chartData: any[];
  config: ChartConfig;
  children?: React.ReactNode;
  responsiveContainer?: Partial<ResponsiveContainerProps>;
  pieChart?: Partial<PieChartBaseProps>;
  pie?: Partial<PieProps>;
  cell?: Partial<CellProps> | ((key: string) => Partial<CellProps>);
  tooltip?: false | Partial<TooltipProps>;
  legend?: false | Partial<LegendProps>;
};

export const PieChart = (props: PieChartProps) => {
  const {
    chartData,
    config,
    children,
    responsiveContainer,
    pieChart,
    tooltip,
    height,
    width,
    cell,
    pie,
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
      <PieChartBase data={chartData} {...pieChart}>
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
        {tooltip !== false && <ChartTooltip {...tooltip} />}
        <Pie
          animationDuration={1000}
          animationEasing="ease"
          data={chartData}
          dataKey="value"
          innerRadius="68%"
          nameKey="name"
          paddingAngle={-20}
          strokeWidth={0}
          {...pie}
        >
          {Object.entries(filteredConfig).map(([key, value]) => {
            const { color, colors } = value;
            const strokeColor = Array.isArray(color)
              ? `url(#${key}Gradient)`
              : color;
            const fillColor = Array.isArray(colors)
              ? `url(#${key}Gradient)`
              : strokeColor;
            const cellProps = typeof cell === "function" ? cell?.(key) : cell;
            return (
              <Cell
                key={key}
                fill={fillColor}
                {...(hoveredLegend === key && {
                  fillOpacity: 0.2,
                  strokeOpacity: 0.2,
                })}
                {...cellProps}
              />
            );
          })}
        </Pie>
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
      </PieChartBase>
    </ChartContainer>
  );
};
