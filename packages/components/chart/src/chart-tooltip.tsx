/* eslint-disable react/no-unstable-nested-components */
import { Tooltip } from "recharts";
import { useChart } from "./use-chart";

export const ChartTooltip = () => {
  const { config } = useChart();
  return (
    <Tooltip
      cursor={false}
      content={({ payload, label }) => {
        return (
          <div className="flex h-auto min-w-[120px] flex-col items-center gap-x-2 rounded-md bg-background p-2 text-xs shadow-sm">
            <div className="flex w-full flex-col gap-y-1">
              <span className="font-medium text-foreground">{label}</span>
              {payload?.map((item, idx) => {
                const { value } = item;
                const { name } = item;
                // const category =
                //   categories.find((c) => c.toLowerCase() === name) ?? name;
                return (
                  <div key={idx} className="flex w-full items-center gap-x-2">
                    <div
                      className="size-2 flex-none rounded-full"
                      style={{
                        backgroundColor: `hsl(var(--ui-success-${(idx + 1) * 200}))`,
                      }}
                    />
                    <span className="text-default-500">
                      {value} {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    />
  );
};
ChartTooltip.displayName = Tooltip.displayName;
