/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Card, CardContent, CardHeader } from "@jamsr-ui/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  {
    title: "Mobile Sales",
    color: "default",
    categories: ["Mobile"],
    chartData: [
      { weekday: "Sunday", mobile: 125 },
      { weekday: "Monday", mobile: 210 },
      { weekday: "Tuesday", mobile: 190 },
      { weekday: "Wednesday", mobile: 150 },
      { weekday: "Thursday", mobile: 220 },
      { weekday: "Friday", mobile: 230 },
      { weekday: "Saturday", mobile: 180 },
    ],
  },
  {
    title: "Tablet Sales",
    color: "primary",
    categories: ["Tablet"],
    chartData: [
      { weekday: "Sunday", tablet: 90 },
      { weekday: "Monday", tablet: 135 },
      { weekday: "Tuesday", tablet: 120 },
      { weekday: "Wednesday", tablet: 60 },
      { weekday: "Thursday", tablet: 110 },
      { weekday: "Friday", tablet: 125 },
      { weekday: "Saturday", tablet: 100 },
    ],
  },
  {
    title: "Desktop Sales",
    color: "secondary",
    categories: ["Desktop"],
    chartData: [
      { weekday: "Sunday", desktop: 50 },
      { weekday: "Monday", desktop: 80 },
      { weekday: "Tuesday", desktop: 70 },
      { weekday: "Wednesday", desktop: 45 },
      { weekday: "Thursday", desktop: 90 },
      { weekday: "Friday", desktop: 85 },
      { weekday: "Saturday", desktop: 75 },
    ],
  },
];

type ChartData = {
  weekday: string;
  [key: string]: string | number;
};

type ChartProps = {
  categories: string[];
  chartData: ChartData[];
  color: string;
  title: string;
};

export const BarChartCard = (props: ChartProps) => {
  const { categories, color, chartData, title } = props;
  return (
    <Card>
      <CardHeader heading={title} subHeading="January - June 2024" />
      <CardContent>
        <ResponsiveContainer height={200} width="100%">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} className="stroke-divider" />
            <XAxis
              dataKey="weekday"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
              tick={{
                fill: "hsl(var(--ui-default-500))",
                style: {
                  fontSize: "var(--fs-sm)",
                },
              }}
            />
            <Tooltip
              cursor={false}
              content={({ label, payload }) => {
                return (
                  <div className="flex h-auto min-w-[120px] items-center gap-x-2 rounded-md bg-background p-2 text-xs shadow-sm">
                    <div className="flex w-full flex-col gap-y-1">
                      <span className="font-medium text-foreground">
                        {label}
                      </span>
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
                              <span className="text-default-500">
                                {category}
                              </span>
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
            {categories.map((category) => (
              <Bar
                barSize={24}
                key={category}
                dataKey={category.toLowerCase()}
                fill={`hsl(var(--ui-${color}`}
                radius={[8, 8, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export const BarChart1 = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
