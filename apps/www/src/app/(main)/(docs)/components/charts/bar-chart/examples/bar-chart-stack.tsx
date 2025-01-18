/* eslint-disable react/no-unstable-nested-components */

"use client";

import { BarChart, type ChartConfig } from "@jamsr-ui/charts";
import { Card, CardHeader } from "@jamsr-ui/react";

const chartData = [
  { weekday: "Mon", android: 20, ios: 30, web: 20, windows: 10 },
  { weekday: "Tue", android: 35, ios: 35, web: 20, windows: 10 },
  { weekday: "Wed", android: 15, ios: 25, web: 20, windows: 10 },
  { weekday: "Thu", android: 12, ios: 35, web: 10, windows: 10 },
  { weekday: "Fri", android: 12, ios: 15, web: 20, windows: 10 },
  { weekday: "Sat", android: 35, ios: 25, web: 10, windows: 6 },
  { weekday: "Sun", android: 40, ios: 30, web: 20, windows: 10 },
];

const config: ChartConfig = {
  android: {
    color: "hsl(var(--ui-primary))",
    label: "Android",
  },
  ios: {
    color: "hsl(var(--ui-secondary))",
    label: "iOS",
  },
  web: {
    color: "hsl(var(--ui-warning))",
    label: "Web",
  },
  windows: {
    color: "hsl(var(--ui-danger))",
    label: "Windows",
  },
};

export const BarChartStack = () => {
  return (
    <Card>
      <CardHeader heading="Stack" />
      <BarChart
        height={200}
        width="100%"
        chartData={chartData}
        config={config}
        barChart={{
          margin: { top: 20, right: 14, left: -8, bottom: 5 },
        }}
        xAxis={{
          dataKey: "weekday",
          tickFormatter: (value: string) => value.slice(0, 3),
        }}
        bar={{ stackId: "bar" }}
      />
    </Card>
  );
};
