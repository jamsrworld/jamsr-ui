import { IconButton, Tooltip, type TooltipProps } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

type Props = TooltipProps;

export const TooltipUsage = (props: Partial<Props>) => {
  return (
    <div className="grid min-h-[100px] place-items-center">
      <Tooltip title="I am tooltip">
        <IconButton label="Click Me!">
          <InfoIcon width={24} height={24} />
        </IconButton>
      </Tooltip>
    </div>
  );
};
