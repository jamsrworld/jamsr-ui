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
  XAxis,
  YAxis,
} from "@jamsr-ui/react";
import * as Recharts from "recharts";

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

const config: ChartConfig = {
  month: {
    label: "Month",
    color: "hsl(var(--ui-success))",
  },
};

export const AreaChartCustom = () => {
  const { chartData, heading } = data;
  return (
    <Card>
      <CardHeader heading={heading} />
      <CardContent>
        <ChartContainer height={300} width="100%" config={config}>
          <Recharts.AreaChart data={chartData}>
            <CartesianGrid />
            {/* <Recharts.XAxis /> */}
            <XAxis />
            <YAxis />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="hsl(var(--ui-success))"
            />
          </Recharts.AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
