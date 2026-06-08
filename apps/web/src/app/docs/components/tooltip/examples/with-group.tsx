import { EmailIcon, InfoIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipWithGroup = () => {
  return (
    <div className="flex gap-2">
      <Tooltip.Group delay={200}>
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
          <Tooltip.Content>This is a tooltip within group</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger
            render={
              <IconButton label="Click Me!">
                <EmailIcon
                  width={24}
                  height={24}
                />
              </IconButton>
            }
          />
          <Tooltip.Content>This is a tooltip within group</Tooltip.Content>
        </Tooltip>
      </Tooltip.Group>
    </div>
  );
};
