/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Card, CardContent, CardHeader } from "@jamsr-ui/react";
import { type ChartConfig, AreaChart } from "@jamsr-ui/charts";

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
    color: "var(--ui-success)",
  },
};

export const AreaChartSolid = () => {
  return (
    <Card>
      <CardHeader heading="Solid" />
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
        />
      </CardContent>
    </Card>
  );
};
