import { Button, Popover, Typography } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const PopoverDefault = () => {
  return (
    <div className="grid min-h-[120px] place-content-center">
      <Popover
        trigger={
          <Button isIconOnly>
            <InfoIcon />
          </Button>
        }
        className="p-2"
      >
        <Typography as="p">This is a Popover content</Typography>
      </Popover>
    </div>
  );
};
