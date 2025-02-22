import { IconButton, Tooltip } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const TooltipCustomized = () => {
  return (
    <div className="grid min-h-[100px] place-items-center">
      <Tooltip
        classNames={{
          arrow: "fill-primary/20",
          content: "bg-primary/20 font-bold text-primary",
        }}
        title="I am tooltip"
        showArrow
      >
        <IconButton label="Click Me!">
          <InfoIcon width={24} height={24} />
        </IconButton>
      </Tooltip>
    </div>
  );
};
