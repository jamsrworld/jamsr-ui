/* eslint-disable react/no-unstable-nested-components */
import { Tooltip } from "recharts";

type Props = {
  categories: string[];
  color: string;
};

export const ChartTooltip = (props: Props) => {
  const { categories, color } = props;
  return <text>hii</text>
  return (
    <Tooltip
      cursor={false}
      content={({ label, payload }) => {
        return (
          <div className="flex h-auto min-w-[120px] items-center gap-x-2 rounded-md bg-background p-2 text-xs shadow-sm">
            <div className="flex w-full flex-col gap-y-1">
              <span className="font-medium text-foreground">{label}</span>
              {payload?.map((item, idx) => {
                const { name } = item;
                const { value } = item;
                const category =
                  categories.find((c) => c.toLowerCase() === name) ?? name;
                return (
                  <div
                    key={`${idx}-${name}`}
                    className="flex w-full items-center gap-x-2"
                  >
                    <div
                      className="size-2 flex-none rounded-full"
                      style={{
                        backgroundColor: `hsl(var(--ui-${color}-${(idx + 1) * 200}))`,
                      }}
                    />
                    <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-default-700">
                      <span className="text-default-500">{category}</span>
                      <span className="font-mono font-medium text-default-700">
                        {value}
                      </span>
                    </div>
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
