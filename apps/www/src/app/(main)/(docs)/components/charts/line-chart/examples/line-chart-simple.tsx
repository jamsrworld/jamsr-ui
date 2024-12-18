/* eslint-disable react/no-unstable-nested-components */

"use client";

import {
  Card,
  CardContent,
  CardHeader,
  type ChartConfig,
  LineChart,
} from "@jamsr-ui/react";

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
  },
  mac: {
    label: "Mac",
    color: "hsl(var(--ui-primary))",
  },
};

export const LineChartSimple = () => {
  return (
    <Card>
      <CardHeader heading="Line Chart" />
      <CardContent>
        <LineChart
          width="100%"
          height={300}
          chartData={chartData}
          config={config}
          xAxis={{
            dataKey: "month",
            tickFormatter: (value: string) => value.slice(0, 3),
          }}
        />
      </CardContent>
    </Card>
  );
};
