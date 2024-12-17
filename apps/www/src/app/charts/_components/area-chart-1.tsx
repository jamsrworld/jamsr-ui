/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Card, CardContent, CardHeader } from "@jamsr-ui/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

export const AreaChart1 = () => {
  return (
    <Card>
      <CardHeader heading="Analytics" />
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              strokeOpacity={0.25}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tick={{
                fill: "hsl(var(--ui-default-500))",
                style: {
                  fontSize: "var(--fs-sm)",
                },
              }}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "hsl(var(--ui-default-400))",
                style: {
                  fontSize: "var(--fs-xs)",
                },
              }}
            />
            <Tooltip
              cursor={false}
              content={({ payload }) => {
                return (
                  <div className="flex h-auto min-w-[120px] items-center gap-x-2 rounded-md bg-background p-2 text-xs shadow-sm">
                    {payload?.map((item, idx) => {
                      const { value } = item;
                      const { name } = item;
                      const { payload } = item;
                      const month = payload?.month;
                      return (
                        <div key={idx}>
                          <div className="flex w-full flex-col items-center justify-between text-xs text-default-700">
                            <span className="text-default-500">
                              {value} {name}
                            </span>
                            <span className="font-medium text-default-700">
                              {month}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            />
            <defs>
              <linearGradient id="colorGradient" x1={0} x2={0} y1={0} y2={1}>
                <stop
                  offset="10%"
                  stopColor="hsl(var(--ui-success-500))"
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--ui-success-100))"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="hsl(var(--ui-success))"
              strokeWidth={2}
              fill="url(#colorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
