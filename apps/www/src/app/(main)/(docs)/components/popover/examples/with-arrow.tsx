import { Button, Popover, Typography } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const PopoverWithArrow = () => {
  return (
    <div className="grid place-content-center">
      <Popover
        trigger={
          <Button isIconOnly>
            <InfoIcon />
          </Button>
        }
        className="p-2"
        showArrow
      >
        <Typography as="p">This is a Popover content</Typography>
      </Popover>
    </div>
  );
};
