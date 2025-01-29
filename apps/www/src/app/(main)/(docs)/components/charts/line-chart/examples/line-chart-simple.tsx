/* eslint-disable react/no-unstable-nested-components */

"use client";

import { LineChart, type ChartConfig } from "@jamsr-ui/charts";
import { Card, CardContent, CardHeader } from "@jamsr-ui/react";

const chartData = [
  { month: "January", views: 460 },
  { month: "February", views: 320 },
  { month: "March", views: 210 },
  { month: "April", views: 150 },
  { month: "May", views: 200 },
  { month: "June", views: 230 },
  { month: "July", views: 190 },
  { month: "August", views: 200 },
  { month: "September", views: 240 },
  { month: "October", views: 260 },
  { month: "November", views: 230 },
  { month: "December", views: 270 },
];

const config: ChartConfig = {
  views: {
    label: "Views",
    color: "var(--ui-success)",
  },
};

export const LineChartSimple = () => {
  return (
    <Card>
      <CardHeader heading="Line Chart Simple" />
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
