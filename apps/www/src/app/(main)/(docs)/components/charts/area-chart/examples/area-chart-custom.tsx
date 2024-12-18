/* eslint-disable react/no-unstable-nested-components */

"use client";

import {
  Area,
  AreaChart,
  Card,
  CardContent,
  CardHeader,
  CartesianGrid,
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  XAxis,
  YAxis,
} from "@jamsr-ui/react";

const data = {
  heading: "Area Chart 2",
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

const config: ChartConfig = {
  window: {
    label: "Window",
    color: "hsl(var(--ui-success-500))",
  },
  mac: {
    label: "Mac",
    color: "hsl(var(--ui-primary))",
  },
};

export const AreaChartCustom = () => {
  const { chartData, heading } = data;
  return (
    <Card>
      <CardHeader heading={heading} />
      <CardContent>
        <ChartContainer height={300} width="100%" config={config}>
          <AreaChart data={chartData}>
            <CartesianGrid />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip />
            <defs>
              {Object.entries(config).map(([key, item], idx) => {
                const { color } = item;
                return (
                  <linearGradient
                    key={key}
                    id={`${key}Gradient`}
                    x1={0}
                    x2={0}
                    y1={0}
                    y2={1}
                  >
                    <stop offset="10%" stopColor={color} stopOpacity={0.3} />
                    <stop
                      offset="100%"
                      stopColor={`hsl(var(--ui-${color}-100))`}
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                );
              })}
            </defs>
            <Area
              dataKey="window"
              fill="url(#windowGradient)"
              stroke="hsl(var(--ui-success))"
              activeDot={{ fill: "hsl(var(--ui-success))" }}
            />
            <Area
              dataKey="mac"
              // fill="hsl(var(--ui-primary))"
              fill="url(#macGradient)"
              stroke="hsl(var(--ui-primary))"
              activeDot={{ fill: "hsl(var(--ui-primary))" }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
