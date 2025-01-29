import { IconButton, Tooltip, type TooltipProps } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

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
    <div className="flex gap-4  min-h-[100px] items-center justify-center">
      {radii.map((radius) => (
        <Tooltip title="I am tooltip" key={radius} radius={radius}>
          <IconButton label="Click Me!">
            <InfoIcon width={24} height={24} />
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
};
