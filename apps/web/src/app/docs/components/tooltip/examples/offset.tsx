import { InfoIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipOffset = () => {
  return (
    <Tooltip>
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
      <Tooltip.Content slotProps={{ positioner: { sideOffset: 20 } }}>
        This tooltip has offset 20
      </Tooltip.Content>
    </Tooltip>
  );
};
