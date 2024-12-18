/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Card, CardContent, CardHeader } from "@jamsr-ui/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = {
  heading: "Area Chart 1",
  colors: ["success"],
  categories: ["Visitors"],
  chartData: [
    { month: "January", visitors: 266 },
    { month: "February", visitors: 505 },
    { month: "March", visitors: 357 },
    { month: "April", visitors: 263 },
    { month: "May", visitors: 339 },
    { month: "June", visitors: 354 },
    { month: "July", visitors: 330 },
    { month: "August", visitors: 320 },
    { month: "September", visitors: 400 },
    { month: "October", visitors: 420 },
    { month: "November", visitors: 380 },
    { month: "December", visitors: 450 },
  ],
};

export const AreaChart1 = () => {
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
              left: -25,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              strokeOpacity={0.25}
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
              tickFormatter={(value: string) => value.slice(0, 3)}
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
