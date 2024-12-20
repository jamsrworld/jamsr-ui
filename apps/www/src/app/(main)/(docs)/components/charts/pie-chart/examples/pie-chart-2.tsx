"use client";

import { Card, CardHeader, type ChartConfig, PieChart } from "@jamsr-ui/react";

const chartData = [
  { name: "Search", value: 400 },
  { name: "Direct", value: 300 },
  { name: "Social", value: 300 },
  { name: "Referral", value: 200 },
];

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
};

const config: ChartConfig = {
  search: {
    label: "Search",
    color: "hsl(var(--ui-warning-200))",
  },
  direct: {
    label: "Direct",
    color: "hsl(var(--ui-warning-400))",
  },
  social: {
    label: "Social",
    color: "hsl(var(--ui-warning-600))",
  },
  referral: {
    label: "Referral",
    color: "hsl(var(--ui-warning-800))",
  },
};

export const PieChart2 = () => {
  return (
    <Card>
      <CardHeader heading="Pie Chart" />
      <PieChart
        chartData={chartData}
        height={250}
        height={250}
        width="100%"
        config={config}
        pieChart={{
          margin: { top: 0, right: 0, left: 0, bottom: 0 },
        }}
        // legend={false}
      />
    </Card>
  );
};
