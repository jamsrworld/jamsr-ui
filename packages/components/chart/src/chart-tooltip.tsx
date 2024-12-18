/* eslint-disable react/no-unstable-nested-components */
import { cn } from "@jamsr-ui/utils";
import { Tooltip, type TooltipProps as Props } from "recharts";
import {
  type NameType,
  type ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { useChart } from "./use-chart";

export type TooltipProps = Props<ValueType, NameType> & {
  classNames?: {
    base?: string;
    label?: string;
    list?: string;
    listItem?: string;
    dot?: string;
    value?: string;
  };
};

export const ChartTooltip = (props: TooltipProps) => {
  const { config } = useChart();
  const { classNames, ...restProps } = props;
  return (
    <Tooltip
      {...restProps}
      cursor={false}
      content={({ payload, label }) => {
        return (
          <div
            className={cn(
              "flex h-auto min-w-[120px] flex-col gap-2 rounded-md bg-background p-2 text-left text-xs shadow-sm",
            )}
          >
            <span
              className={cn("font-medium text-foreground", classNames?.label)}
            >
              {label}
            </span>
            <ul className={classNames?.list}>
              {payload?.map((item, idx) => {
                const { value } = item;
                const { name } = item;
                const configItem = name ? config[name] : null;
                const label = configItem?.label ?? name;
                const color = configItem?.color ?? "default";
                return (
                  <li
                    key={idx}
                    className={cn(
                      "flex w-full items-center gap-x-2",
                      classNames?.listItem,
                    )}
                  >
                    <div
                      style={{
                        backgroundColor: color,
                      }}
                      className={cn(
                        "size-2 flex-none rounded-full",
                        classNames?.dot,
                      )}
                    />
                    <span className={cn("text-default-500", classNames?.value)}>
                      {value} {label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }}
    />
  );
};
ChartTooltip.displayName = Tooltip.displayName;
