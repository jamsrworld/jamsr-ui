import { Button, Tooltip, type TooltipProps } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

type Props = TooltipProps;

export const TooltipDefault = (props: Partial<Props>) => {
  return (
    <div className="grid min-h-[100px] place-items-center">
      <Tooltip
        title="I am tooltip"
        {...props}
      >
        <Button
          aria-label="Click Me!"
          isIconOnly
        >
          <InfoIcon />
        </Button>
      </Tooltip>
    </div>
  );
};
