import { cn } from "@jamsr-ui/utils";
import { useChart } from "./use-chart";

type Props = {
  onMouseEnter?: (key: string) => void;
  onMouseLeave?: (key: string) => void;
  onClick?: (key: string) => void;
  filteredLegends?: string[];
};

export const ChartLegend = (props: Props) => {
  const { onMouseEnter, onMouseLeave, onClick, filteredLegends } = props;
  const { config } = useChart();

  return (
    <div className="flex justify-center pt-4">
      <ul className="flex items-center gap-2">
        {Object.entries(config).map(([key, value], idx) => {
          const { color } = value;
          const isFiltered = filteredLegends?.includes(key);
          return (
            <li
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
              key={key}
              onMouseEnter={() => onMouseEnter?.(key)}
              onMouseLeave={() => onMouseLeave?.(key)}
              onClick={() => onClick?.(key)}
              className={cn(
                "flex items-center gap-1 hover:opacity-70",
                isFiltered && "opacity-40",
              )}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick?.(key);
                }
              }}
            >
              <span
                className="size-2 rounded-full"
                style={{
                  backgroundColor:
                    typeof color === "string" ? color : undefined,
                }}
              />
              <span className="text-xs text-foreground-400">{value.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
