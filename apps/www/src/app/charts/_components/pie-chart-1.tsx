"use client";

import { Card, CardHeader, type ButtonProps } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type ChartData = {
  name: string;
  [key: string]: string | number;
};

type CircleChartProps = {
  title: string;
  color: ButtonProps["color"];
  categories: string[];
  chartData: ChartData[];
};

const data: CircleChartProps[] = [
  {
    title: "Traffic Sources",
    categories: ["Search", "Direct", "Social", "Referral"],
    color: "warning",
    chartData: [
      { name: "Search", value: 400 },
      { name: "Direct", value: 300 },
      { name: "Social", value: 300 },
      { name: "Referral", value: 200 },
    ],
  },
  {
    title: "Device Usage",
    categories: ["Mobile", "Desktop", "Tablet", "Smart TV"],
    color: "success",
    chartData: [
      { name: "Mobile", value: 450 },
      { name: "Desktop", value: 300 },
      { name: "Tablet", value: 250 },
      { name: "Smart TV", value: 200 },
    ],
  },
  {
    title: "Browser Usage",
    categories: ["Chrome", "Safari", "Firefox", "Edge"],
    color: "danger",
    chartData: [
      { name: "Chrome", value: 350 },
      { name: "Safari", value: 280 },
      { name: "Firefox", value: 220 },
      { name: "Edge", value: 150 },
    ],
  },
];

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
};

const CircleChartCard = (props: CircleChartProps & { className?: string }) => {
  const { className, title, categories, color, chartData } = props;
  const total = 2492;
  return (
    <Card
      className={cn(
        "flex min-h-[240px] flex-col border border-transparent dark:border-default-100",
        className,
      )}
    >
      <CardHeader heading={title} />
      <div className="flex h-full flex-wrap items-center justify-center gap-x-2 lg:flex-nowrap">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height={180}
          width="100%"
        >
          <PieChart
            accessibilityLayer
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Tooltip
              // eslint-disable-next-line react/no-unstable-nested-components
              content={({ label, payload }) => (
                <div className="flex h-8 min-w-[120px] items-center gap-x-2 rounded-md bg-background px-1 text-xs shadow-sm">
                  <span className="font-medium text-foreground">{label}</span>
                  {payload?.map((p, index) => {
                    const { name } = p;
                    const { value } = p;
                    const category =
                      categories.find((c) => c.toLowerCase() === name) ?? name;
                    return (
                      <div
                        key={`${index}-${name}`}
                        className="flex w-full items-center gap-x-2"
                      >
                        <div
                          className="size-2 flex-none rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--ui-${color}-${(index + 1) * 200}))`,
                          }}
                        />
                        <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-default-700">
                          <span className="text-default-500">{category}</span>
                          <span className="font-mono font-medium text-default-700">
                            {formatTotal(value as number)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              cursor={false}
            />
            <Pie
              animationDuration={1000}
              animationEasing="ease"
              data={chartData}
              dataKey="value"
              innerRadius="68%"
              nameKey="name"
              paddingAngle={-20}
              strokeWidth={0}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(var(--ui-${color}-${(index + 1) * 200}))`}
                />
              ))}
            </Pie>
            <g>
              <text textAnchor="middle" x="50%" y="48%">
                <tspan className="fill-default-500 text-xs" dy="-0.5em" x="50%">
                  Total
                </tspan>
                <tspan
                  className="fill-foreground text-md font-semibold"
                  dy="1.5em"
                  x="50%"
                >
                  {formatTotal(total)}
                </tspan>
              </text>
            </g>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex w-full flex-col justify-center gap-4 p-4 text-xs text-default-500 lg:p-0">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="size-2 rounded-full"
                style={{
                  backgroundColor: `hsl(var(--ui-${color}-${(index + 1) * 200}))`,
                }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export const PieChart1 = () => {
  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
  );
};
