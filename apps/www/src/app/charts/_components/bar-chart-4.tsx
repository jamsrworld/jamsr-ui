/* eslint-disable react/no-unstable-nested-components */

"use client";

import { type ButtonProps, Card, Typography } from "@jamsr-ui/react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartData = {
  weekday: string;
  [key: string]: string | number;
};

type BarChartProps = {
  title: string;
  color: NonNullable<ButtonProps["color"]>;
  categories: string[];
  chartData: ChartData[];
};

const data: BarChartProps[] = [
  {
    title: "Operating Systems",
    categories: ["Android", "iOS", "Web", "Windows"],
    color: "default",
    chartData: [
      { weekday: "Mon", android: 20, ios: 30, web: 20, windows: 10 },
      { weekday: "Tue", android: 35, ios: 35, web: 20, windows: 10 },
      { weekday: "Wed", android: 15, ios: 25, web: 20, windows: 10 },
      { weekday: "Thu", android: 12, ios: 35, web: 10, windows: 10 },
      { weekday: "Fri", android: 12, ios: 15, web: 20, windows: 10 },
      { weekday: "Sat", android: 35, ios: 25, web: 10, windows: 6 },
      { weekday: "Sun", android: 40, ios: 30, web: 20, windows: 10 },
    ],
  },
  {
    title: "Browser Usage",
    categories: ["Chrome", "Firefox", "Safari", "Edge"],
    color: "primary",
    chartData: [
      { weekday: "Mon", chrome: 45, firefox: 20, safari: 12, edge: 8 },
      { weekday: "Tue", chrome: 40, firefox: 10, safari: 12, edge: 8 },
      { weekday: "Wed", chrome: 52, firefox: 12, safari: 15, edge: 10 },
      { weekday: "Thu", chrome: 28, firefox: 12, safari: 12, edge: 8 },
      { weekday: "Fri", chrome: 30, firefox: 12, safari: 12, edge: 8 },
      { weekday: "Sat", chrome: 45, firefox: 32, safari: 8, edge: 5 },
      { weekday: "Sun", chrome: 68, firefox: 17, safari: 10, edge: 5 },
    ],
  },
  {
    title: "Device Types",
    categories: ["Mobile", "Tablet", "Desktop", "Other"],
    color: "secondary",
    chartData: [
      { weekday: "Mon", mobile: 25, tablet: 10, desktop: 20, other: 20 },
      { weekday: "Tue", mobile: 40, tablet: 10, desktop: 30, other: 20 },
      { weekday: "Wed", mobile: 10, tablet: 50, desktop: 20, other: 20 },
      { weekday: "Thu", mobile: 40, tablet: 20, desktop: 20, other: 10 },
      { weekday: "Fri", mobile: 15, tablet: 30, desktop: 20, other: 10 },
      { weekday: "Sat", mobile: 50, tablet: 20, desktop: 10, other: 20 },
      { weekday: "Sun", mobile: 50, tablet: 10, desktop: 20, other: 20 },
    ],
  },
];

const BarChartCard = (props: BarChartProps) => {
  const { chartData, title, categories, color } = props;
  return (
    <Card className="h-[500px]">
      <div className="flex flex-col gap-y-4 p-4">
        <dt>
          <Typography as="h3" variant="paragraph2">
            {title}
          </Typography>
        </dt>
        <dd className="flex w-full justify-end gap-4 text-xs text-default-500">
          {categories.map((item, idx) => {
            return (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{
                    backgroundColor: `hsl(var(--ui-${color}-${(idx + 1) * 200}))`,
                  }}
                />
                <Typography as="span">{item}</Typography>
              </div>
            );
          })}
        </dd>
      </div>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          data={chartData}
          accessibilityLayer
          margin={{ top: 20, right: 14, left: -8, bottom: 5 }}
          layout="vertical"
        >
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "hsl(var(--ui-default-400))",
              style: {
                fontSize: "var(--fs-xs)",
              },
            }}
          />
          <YAxis
            dataKey="weekday"
            type="category"
            tickLine={false}
            tickFormatter={(value: string) => value.slice(0, 3)}
            tick={{
              fill: "hsl(var(--ui-default-500))",
              style: {
                fontSize: "var(--fs-xs)",
              },
            }}
          />
          <Tooltip
            cursor={false}
            content={({ label, payload }) => {
              return (
                <div className="flex h-auto min-w-[120px] items-center gap-x-2 rounded-md bg-background p-2 text-xs shadow-sm">
                  <div className="flex w-full flex-col gap-y-1">
                    <span className="font-medium text-foreground">{label}</span>
                    {payload?.map((item, idx) => {
                      const { name } = item;
                      const { value } = item;
                      const category =
                        categories.find((c) => c.toLowerCase() === name) ??
                        name;
                      return (
                        <div
                          key={`${idx}-${name}`}
                          className="flex w-full items-center gap-x-2"
                        >
                          <div
                            className="size-2 flex-none rounded-full"
                            style={{
                              backgroundColor: `hsl(var(--ui-${color}-${(idx + 1) * 200}))`,
                            }}
                          />
                          <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-default-700">
                            <span className="text-default-500">{category}</span>
                            <span className="font-mono font-medium text-default-700">
                              {value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }}
          />
          {categories.map((item, idx) => {
            return (
              <Bar
                key={item}
                barSize={24}
                animationDuration={450}
                animationEasing="ease"
                dataKey={item.toLowerCase()}
                fill={`hsl(var(--ui-${color}-${(idx + 1) * 200}))`}
                radius={idx === categories.length - 1 ? [0, 4, 4, 0] : 0}
                stackId="bars"
              />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export const BarChart4 = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item) => {
        return (
          <BarChartCard
            key={item.title}
            categories={item.categories}
            color={item.color}
            title={item.title}
            chartData={item.chartData}
          />
        );
      })}
    </div>
  );
};
