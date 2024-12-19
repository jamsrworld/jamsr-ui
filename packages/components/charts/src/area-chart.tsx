"use client";

import { useState, type ComponentProps } from "react";
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
import { type Payload } from "recharts/types/component/DefaultLegendContent";
import { ChartContainer } from "./chart-container";
import { ChartTooltip, type TooltipProps } from "./chart-tooltip";
import { chartStyles } from "./styles";
import { type ChartConfig } from "./types";
import { ChartLegend } from "./chart-legend";

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

  const [hoveredLegend, setHoveredLegend] = useState<string | null>(null);
  const [clickedLegends, setClickedLegends] = useState<string[]>([]);

  const onMouseEnter = (props: Payload) => {
    const { dataKey } = props;
    if (dataKey) setHoveredLegend(String(dataKey));
  };
  const onMouseLeave = () => {
    setHoveredLegend(null);
  };

  const handleLegendClick = (props: Payload) => {
    const { dataKey } = props;
    if (dataKey) {
      setClickedLegends((prev) => {
        if (prev.includes(String(dataKey))) {
          return prev.filter((key) => key !== String(dataKey));
        }
        return [...prev, String(dataKey)];
      });
    }
  };

  const filteredConfig = Object.entries(config).reduce((acc, [key, value]) => {
    if (!clickedLegends.includes(key)) {
      acc[key] = value;
    }
    return acc;
  }, {} as ChartConfig);

  return (
    <ChartContainer
      height={height}
      width={width}
      config={filteredConfig}
      {...responsiveContainer}
    >
      <AreaChartBase data={chartData} {...areaChart}>
        {legend !== false && (
          <Legend
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleLegendClick}
            {...chartStyles.legend(legend)}
          />
        )}
        <ChartLegend />
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
