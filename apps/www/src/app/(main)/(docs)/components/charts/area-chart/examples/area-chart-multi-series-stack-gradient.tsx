/* eslint-disable react/no-unstable-nested-components */

"use client";

import { type ChartConfig, AreaChart } from "@jamsr-ui/charts";
import { Card, CardContent, CardHeader } from "@jamsr-ui/react";

const chartData = [
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
];

const config: ChartConfig = {
  window: {
    label: "Window",
    color: "hsl(var(--ui-success))",
    colors: [
      {
        offset: "10%",
        stopColor: "hsl(var(--ui-success-500))",
        stopOpacity: 0.3,
      },
      {
        offset: "100%",
        stopColor: "hsl(var(--ui-success-100))",
        stopOpacity: 0.1,
      },
    ],
  },
  mac: {
    label: "Mac",
    color: "hsl(var(--ui-warning))",
    colors: [
      {
        offset: "10%",
        stopColor: "hsl(var(--ui-warning-500))",
        stopOpacity: 0.3,
      },
      {
        offset: "100%",
        stopColor: "hsl(var(--ui-warning-100))",
        stopOpacity: 0.1,
      },
    ],
  },
};
export const AreaChartMultiSeriesStackGradient = () => {
  return (
    <Card>
      <CardHeader heading="Multi Series Stack Gradient" />
      <CardContent>
        <AreaChart
          config={config}
          width="100%"
          height={300}
          chartData={chartData}
          xAxis={{
            dataKey: "month",
            tickFormatter: (value: string) => value.slice(0, 3),
          }}
          area={(key) => ({
            dataKey: key,
            stackId: "stack",
          })}
        />
      </CardContent>
    </Card>
  );
};
