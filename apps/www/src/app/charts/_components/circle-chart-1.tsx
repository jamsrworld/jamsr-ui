"use client";

import { DotMenuIcon } from "@/components/icons";
import {
  Card,
  IconButton,
  Menu,
  MenuItem,
  Select,
  SelectItem,
  type ButtonProps,
} from "@jamsr-ui/react";
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

export const CircleChart1 = () => {
  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
  );
};

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
};

const CircleChartCard = (props: CircleChartProps & { className?: string }) => {
  const { className, title, categories, color, chartData } = props;
  return (
    <Card
      className={cn(
        "flex min-h-[240px] flex-col border border-transparent dark:border-default-100",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 p-4 pb-0">
        <div className="flex items-center justify-between gap-x-2">
          <dt>
            <h3 className="text-sm font-normal text-default-500">{title}</h3>
          </dt>
          <div className="flex items-center justify-end gap-x-2">
            <Select
              aria-label="Time Range"
              classNames={{
                trigger: "min-w-[100px] min-h-7 h-7",
                value: "text-tiny !text-default-500",
                popover: "min-w-[120px]",
              }}
              placeholder="Per Day"
              size="sm"
            >
              <SelectItem value="per-day">Per Day</SelectItem>
              <SelectItem value="per-week">Per Week</SelectItem>
              <SelectItem value="per-month">Per Month</SelectItem>
            </Select>
            <Menu
              classNames={{
                base: "min-w-[120px]",
              }}
              placement="bottom-end"
              trigger={
                <IconButton
                  aria-label="Options"
                  radius="full"
                  size="sm"
                  variant="light"
                >
                  <DotMenuIcon />
                </IconButton>
              }
            >
              <MenuItem key="view-details">View Details</MenuItem>
              <MenuItem key="export-data">Export Data</MenuItem>
              <MenuItem key="set-alert">Set Alert</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
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
