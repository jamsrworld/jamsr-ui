import { InfoIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipWithArrow = () => {
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
      <Tooltip.Content>
        <Tooltip.Arrow />I am tooltip
      </Tooltip.Content>
    </Tooltip>
  );
};
