/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Card, CardHeader, Typography } from "@jamsr-ui/react";
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
  title: "Operating Systems",
  categories: ["Android", "iOS", "Web", "Windows"],
  color: "primary",
  chartData: [
    { weekday: "Mon", android: 20, ios: 30, web: 20, windows: 10 },
    { weekday: "Tue", android: 35, ios: 35, web: 20, windows: 10 },
    { weekday: "Wed", android: 15, ios: 25, web: 20, windows: 10 },
    { weekday: "Thu", android: 12, ios: 35, web: 10, windows: 10 },
    { weekday: "Fri", android: 12, ios: 15, web: 20, windows: 10 },
    { weekday: "Sat", android: 35, ios: 25, web: 10, windows: 6 },
    { weekday: "Sun", android: 40, ios: 30, web: 20, windows: 10 },
  ],
};

export const BarChartStack = () => {
  const { chartData, title, categories, color } = data;
  return (
    <Card className="h-[300px]">
      <CardHeader heading={title} />
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
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          data={chartData}
          accessibilityLayer
          margin={{ top: 20, right: 14, left: -8, bottom: 5 }}
        >
          <CartesianGrid vertical={false} className="stroke-divider" />
          <XAxis
            dataKey="weekday"
            strokeOpacity={0.25}
            tickLine={false}
            tickFormatter={(value: string) => value.slice(0, 3)}
            tick={{
              fill: "hsl(var(--ui-default-500))",
              style: {
                fontSize: "var(--fs-xs)",
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
                radius={idx === categories.length - 1 ? [4, 4, 0, 0] : 0}
                stackId="bars"
              />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
