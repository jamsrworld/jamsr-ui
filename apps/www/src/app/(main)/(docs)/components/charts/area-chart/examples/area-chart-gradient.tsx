/* eslint-disable react/no-unstable-nested-components */

"use client";

import {
  AreaChart2Main,
  Card,
  CardContent,
  CardHeader,
  type ChartConfig,
} from "@jamsr-ui/react";

const chartData = [
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
];

const config: ChartConfig = {
  visitors: {
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
};

export const AreaChartGradient = () => {
  return (
    <Card>
      <CardHeader heading="Gradient" />
      <CardContent>
        <AreaChart2Main
          config={config}
          width="100%"
          height={300}
          chartData={chartData}
          xAxis={{
            dataKey: "month",
            tickFormatter: (value: string) => value.slice(0, 3),
          }}
        />
      </CardContent>
    </Card>
  );
};
