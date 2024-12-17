/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Card, CardContent, CardHeader, Typography } from "@jamsr-ui/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = {
  title: "Sales",
  color: "primary",
  categories: ["Mobile", "Desktop"],
  chartData: [
    { weekday: "Sunday", mobile: 125, desktop: 50 },
    { weekday: "Monday", mobile: 210, desktop: 80 },
    { weekday: "Tuesday", mobile: 190, desktop: 70 },
    { weekday: "Wednesday", mobile: 150, desktop: 45 },
    { weekday: "Thursday", mobile: 220, desktop: 90 },
    { weekday: "Friday", mobile: 230, desktop: 85 },
    { weekday: "Saturday", mobile: 180, desktop: 75 },
  ],
};

export const BarChartMultiColumns = () => {
  const { categories, color, chartData, title } = data;
  return (
    <Card>
      <CardHeader heading={title} subHeading="January - June 2024" />
      <CardContent>
        <div className="flex w-full justify-end gap-4 p-4 text-xs text-default-500">
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
        </div>
        <ResponsiveContainer height={200} width="100%">
          <BarChart
            accessibilityLayer
            data={chartData}
            barGap={4}
            margin={{ top: 20, right: 14, left: -8, bottom: 5 }}
          >
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
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "hsl(var(--ui-default-400))",
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
