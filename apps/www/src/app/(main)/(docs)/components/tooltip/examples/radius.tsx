import { type TooltipProps } from "@jamsr-ui/react";
import { TooltipUsage } from "./usage";

export const TooltipRadius = () => {
  const radii: TooltipProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <TooltipUsage key={radius} radius={radius} />
      ))}
    </div>
  );
};
