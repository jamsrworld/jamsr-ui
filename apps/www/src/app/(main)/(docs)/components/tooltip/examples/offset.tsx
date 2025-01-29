import { IconButton, Tooltip } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const TooltipOffset = () => {
  return (
    <div className="grid min-h-[100px] place-items-center">
      <Tooltip offset={20} title="This tooltip has offset 20">
        <IconButton label="Click Me!">
          <InfoIcon width={24} height={24} />
        </IconButton>
      </Tooltip>
    </div>
  );
};
