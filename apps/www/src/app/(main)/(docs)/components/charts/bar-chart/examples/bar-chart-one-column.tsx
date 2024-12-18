/* eslint-disable react/no-unstable-nested-components */

"use client";

import {
  BarChart,
  Card,
  CardContent,
  CardHeader,
  type ChartConfig,
} from "@jamsr-ui/react";

const chartData = [
  { weekday: "Sunday", tablet: 90 },
  { weekday: "Monday", tablet: 135 },
  { weekday: "Tuesday", tablet: 120 },
  { weekday: "Wednesday", tablet: 60 },
  { weekday: "Thursday", tablet: 110 },
  { weekday: "Friday", tablet: 125 },
  { weekday: "Saturday", tablet: 100 },
];

const config: ChartConfig = {
  tablet: {
    color: "hsl(var(--ui-primary))",
    label: "Tablet Sales",
  },
};

export const BarChartOneColumn = () => {
  return (
    <Card>
      <CardHeader heading="Bar Chart" />
      <CardContent>
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
        />
      </CardContent>
    </Card>
  );
};
