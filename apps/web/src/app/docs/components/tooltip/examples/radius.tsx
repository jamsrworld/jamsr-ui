import { IconButton } from "jamsrui/icon-button";
import { InfoIcon } from "@jamsrui/icons";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipRadius = () => {
  const radii: Tooltip.Props["radius"][] = ["none", "sm", "md", "lg", "full"];
  return (
    <div className="flex gap-4  min-h-25 items-center justify-center">
      {radii.map((radius) => (
        <Tooltip
          key={radius}
          radius={radius}
        >
          <Tooltip.Trigger
            render={
              <IconButton label="Click Me!">
                <InfoIcon
                  width={24}
                  height={24}
                />
              </IconButton>
            }
          />
          <Tooltip.Content>I am tooltip</Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  );
};
