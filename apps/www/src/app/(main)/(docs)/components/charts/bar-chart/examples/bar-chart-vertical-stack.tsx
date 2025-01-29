/* eslint-disable react/no-unstable-nested-components */

"use client";

import { BarChart, type ChartConfig } from "@jamsr-ui/charts";
import { Card, CardHeader } from "@jamsr-ui/react";

const chartData = [
  { weekday: "Mon", chrome: 45, firefox: 20, safari: 12, edge: 8 },
  { weekday: "Tue", chrome: 40, firefox: 10, safari: 12, edge: 8 },
  { weekday: "Wed", chrome: 52, firefox: 12, safari: 15, edge: 10 },
  { weekday: "Thu", chrome: 28, firefox: 12, safari: 12, edge: 8 },
  { weekday: "Fri", chrome: 30, firefox: 12, safari: 12, edge: 8 },
  { weekday: "Sat", chrome: 45, firefox: 32, safari: 8, edge: 5 },
  { weekday: "Sun", chrome: 68, firefox: 17, safari: 10, edge: 5 },
];

const config: ChartConfig = {
  chrome: {
    color: "var(--ui-primary)",
    label: "Chrome",
  },
  firefox: {
    color: "var(--ui-secondary)",
    label: "Firefox",
  },
  safari: {
    color: "var(--ui-warning)",
    label: "Safari",
  },
  edge: {
    color: "var(--ui-danger)",
    label: "Edge",
  },
};

export const BarChartVerticalStack = () => {
  return (
    <Card>
      <CardHeader heading="Vertical Stack" />
      <BarChart
        layout="vertical"
        height={500}
        width="100%"
        chartData={chartData}
        config={config}
        barChart={{
          margin: { top: 20, right: 14, left: -8, bottom: 5 },
        }}
        yAxis={{
          dataKey: "weekday",
          tickFormatter: (value: string) => value.slice(0, 3),
        }}
        bar={{ stackId: "bar" }}
      />
    </Card>
  );
};
