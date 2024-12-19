import { useState } from "react";
import { type ChartConfig } from "./types";

export const useLegend = (config: ChartConfig) => {
  const [hoveredLegend, setHoveredLegend] = useState<string | null>(null);
  const [clickedLegends, setClickedLegends] = useState<string[]>([]);
  const filteredConfig = Object.entries(config).reduce((acc, [key, value]) => {
    if (!clickedLegends.includes(key)) {
      acc[key] = value;
    }
    return acc;
  }, {} as ChartConfig);
  const onMouseEnter = (dataKey: string) => {
    if (dataKey) setHoveredLegend(String(dataKey));
  };
  const onMouseLeave = () => {
    setHoveredLegend(null);
  };
  const handleLegendClick = (dataKey: string) => {
    if (dataKey) {
      setClickedLegends((prev) => {
        if (prev.includes(String(dataKey))) {
          return prev.filter((key) => key !== String(dataKey));
        }
        return [...prev, String(dataKey)];
      });
    }
  };

  return {
    hoveredLegend,
    onMouseEnter,
    onMouseLeave,
    handleLegendClick,
    filteredConfig,
    clickedLegends,
  };
};
