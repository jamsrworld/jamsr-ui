"use client";

import { Card, CardContent } from "@jamsr-ui/react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
];

export const RadialMultiBarChart = () => {
  return (
    <Card>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="80%"
            barSize={120}
            data={data}
          >
            <RadialBar
              label={{
                position: "insideStart",
                fill: "var(hsl(--ui-primary))",
              }}
              background
              dataKey="uv"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
