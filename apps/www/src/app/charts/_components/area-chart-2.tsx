/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Card, CardContent, CardHeader } from "@jamsr-ui/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = {
  colors: ["success", "default"],
  heading: "Analytics",
  categories: ["Mac", "Window"],
  chartData: [
    { month: "January", window: 460, mac: 106 },
    { month: "February", window: 320, mac: 185 },
    { month: "March", window: 210, mac: 147 },
    { month: "April", window: 150, mac: 113 },
    { month: "May", window: 200, mac: 139 },
    { month: "June", window: 230, mac: 124 },
    { month: "July", window: 190, mac: 140 },
    { month: "August", window: 200, mac: 120 },
    { month: "September", window: 240, mac: 160 },
    { month: "October", window: 260, mac: 160 },
    { month: "November", window: 230, mac: 150 },
    { month: "December", window: 270, mac: 180 },
  ],
};

export const AreaChart2 = () => {
  const { chartData, colors, categories, heading } = data;
  return (
    <Card>
      <CardHeader heading={heading} />
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="hsl(var(--ui-default-200))"
              // horizontalCoordinatesGenerator={[200, 150, 100, 50]}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tick={{
                fill: "hsl(var(--ui-default-500))",
                style: {
                  fontSize: "var(--fs-sm)",
                },
              }}
              axisLine={false}
              tickMargin={10}
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
              content={({ payload, label }) => {
                return (
                  <div className="flex h-auto min-w-[120px] flex-col items-center gap-x-2 rounded-md bg-background p-2 text-xs shadow-sm">
                    <div className="flex w-full flex-col gap-y-1">
                      <span className="font-medium text-foreground">
                        {label}
                      </span>
                      {payload?.map((item, idx) => {
                        const { value } = item;
                        const { name } = item;
                        const category =
                          categories.find((c) => c.toLowerCase() === name) ??
                          name;
                        return (
                          <div
                            key={idx}
                            className="flex w-full items-center gap-x-2"
                          >
                            <div
                              className="size-2 flex-none rounded-full"
                              style={{
                                backgroundColor: `hsl(var(--ui-success-${(idx + 1) * 200}))`,
                              }}
                            />
                            <span className="text-default-500">
                              {value} {category}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }}
            />
            <defs>
              {categories.map((item, idx) => {
                const color = colors[idx];
                return (
                  <linearGradient
                    key={item}
                    id={`${color}Gradient`}
                    x1={0}
                    x2={0}
                    y1={0}
                    y2={1}
                  >
                    <stop
                      offset="10%"
                      stopColor={`hsl(var(--ui-${color}-500))`}
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor={`hsl(var(--ui-${color}-100))`}
                      stopOpacity="0.1"
                    />
                  </linearGradient>
                );
              })}
            </defs>
            {categories.map((item, idx) => {
              const color = colors[idx];
              return (
                <Area
                  key={item}
                  type="monotone"
                  dataKey={item.toLowerCase()}
                  stroke={`hsl(var(--ui-${color}))`}
                  strokeWidth={2}
                  fill={`url(#${color}Gradient)`}
                  activeDot={{
                    stroke: `hsl(var(--ui-${color}))`,
                    strokeWidth: 2,
                    fill: `hsl(var(--ui-background))`,
                    r: 5,
                  }}
                />
              );
            })}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
