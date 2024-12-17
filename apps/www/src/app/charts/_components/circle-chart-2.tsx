"use client";

import { DotMenuIcon } from "@/components/icons";
import {
  type ButtonProps,
  Card,
  type CardProps,
  IconButton,
  Menu,
  MenuItem,
} from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import React from "react";
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

export const CircleChart2 = () => {
  return (
    <dl className="grid w-full grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
  );
};

const formatTotal = (value: number | undefined) => {
  return value?.toLocaleString() ?? "0";
};

const CircleChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, "children"> & CircleChartProps
>(({ className, title, color, chartData, total, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        "h-[250px] border border-transparent dark:border-default-100",
        className,
      )}
      {...props}
    >
      <div className="flex w-full flex-col gap-y-2 p-4 pb-0">
        <div className="flex items-center justify-between gap-x-2">
          <dt>
            <h3 className="text-sm font-medium text-default-500">{title}</h3>
          </dt>
          <div className="flex items-center justify-end gap-x-2">
            <Menu
              placement="bottom-end"
              trigger={
                <IconButton
                  aria-label="Open Menu"
                  radius="full"
                  size="sm"
                  variant="light"
                >
                  <DotMenuIcon />
                </IconButton>
              }
            >
              <MenuItem value="view-details">View Details</MenuItem>
              <MenuItem value="export-data">Export Data</MenuItem>
              <MenuItem value="set-alert">Set Alert</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="flex h-full gap-x-3">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height="100%"
          width="100%"
        >
          <RadialBarChart
            barSize={12}
            cx="50%"
            cy="50%"
            data={chartData}
            startAngle={225}
            endAngle={-45}
            innerRadius={90}
            outerRadius={70}
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
});
