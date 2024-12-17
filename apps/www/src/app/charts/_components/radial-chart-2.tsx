"use client";

import {
  Card,
  CardHeader,
  type ButtonProps,
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
    title: "Activity",
    color: "default",
    total: 1358,
    chartData: [
      { name: "Active Users", value: 780, fill: "hsl(var(--ui-primary))" },
    ],
  },
  {
    title: "Revenue",
    color: "primary",
    total: 2450,
    chartData: [
      { name: "Monthly", value: 1840, fill: "hsl(var(--ui-primary))" },
    ],
  },
  {
    title: "Engagement",
    color: "secondary",
    total: 4200,
    chartData: [
      {
        name: "Daily Views",
        value: 3150,
        fill: "hsl(var(--ui-secondary))",
      },
    ],
  },
  {
    title: "Conversion",
    color: "success",
    total: 1000,
    chartData: [{ name: "Sales", value: 750, fill: "hsl(var(--ui-success))" }],
  },
  {
    title: "Bounce Rate",
    color: "warning",
    total: 100,
    chartData: [{ name: "Exits", value: 80, fill: "hsl(var(--ui-warning))" }],
  },
  {
    title: "Errors",
    color: "danger",
    total: 500,
    chartData: [{ name: "Issues", value: 450, fill: "hsl(var(--ui-danger))" }],
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
        "flex h-[240px] flex-col border border-transparent dark:border-default-100",
        className,
      )}
    >
      <CardHeader heading={title} />
      <div className="flex h-full gap-x-3">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height="100%"
          width="100%"
        >
          <RadialBarChart
            barSize={10}
            cx="50%"
            cy="50%"
            data={chartData}
            endAngle={-270}
            innerRadius={90}
            outerRadius={70}
            startAngle={90}
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
                fill: "hsl(var(--ui-default-100))",
              }}
              cornerRadius={12}
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(var(--ui-${color === "default" ? "foreground" : color}))`}
                />
              ))}
            </RadialBar>
            <g>
              <text textAnchor="middle" x="50%" y="48%">
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

export const RadialChart2 = () => {
  return (
    <dl className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
  );
};
