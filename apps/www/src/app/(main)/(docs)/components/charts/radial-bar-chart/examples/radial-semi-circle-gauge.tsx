"use client";

import {
  type ButtonProps,
  Card,
  CardHeader,
  type CardProps,
} from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import {
  Cell,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  name: string;
  value: number;
  [key: string]: string | number;
};

type CircleChartProps = {
  title: string;
  color: ButtonProps["color"];
  chartData: ChartData[];
  total: number;
};

const data: CircleChartProps[] = [
  {
    title: "Conversion",
    color: "success",
    total: 1000,
    chartData: [{ name: "Sales", value: 750, fill: "var(--ui-success)" }],
  },
  {
    title: "Bounce Rate",
    color: "warning",
    total: 100,
    chartData: [{ name: "Exits", value: 80, fill: "var(--ui-warning)" }],
  },
];

const formatTotal = (value: number | undefined) => {
  return value?.toLocaleString() ?? "0";
};

const CircleChartCard = (props: CircleChartProps & CardProps) => {
  const { className, title, color, chartData, total } = props;
  return (
    <Card
      className={cn(
        "border border-transparent dark:border-default-100",
        className,
      )}
    >
      <CardHeader heading={title} />
      <div className="flex h-full items-center justify-center gap-x-3">
        <ResponsiveContainer height={200} width={200}>
          <RadialBarChart
            barSize={44}
            cx="50%"
            cy="50%"
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={90}
            outerRadius={70}
            margin={{ bottom: -100 }}
          >
            <PolarAngleAxis
              angleAxisId={0}
              domain={[0, total]}
              tick={false}
              type="number"
            />
            <RadialBar
              angleAxisId={0}
              animationDuration={1000}
              animationEasing="ease"
              background={{
                fill: "var(--ui-default-100))",
              }}
              cornerRadius={12}
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`var(--ui-${color === "default" ? "foreground" : color})`}
                />
              ))}
            </RadialBar>
            <g>
              <text textAnchor="middle" x="50%" y="40%">
                <tspan className="fill-default-500 text-xs" dy="-0.5em" x="50%">
                  {chartData?.[0].name}
                </tspan>
                <tspan
                  className="fill-foreground text-md font-semibold"
                  dy="1.5em"
                  x="50%"
                >
                  {formatTotal(total)}
                </tspan>
              </text>
            </g>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export const RadialSemiCircleGaugeChart = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-5  md:grid-cols-2">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </div>
  );
};
