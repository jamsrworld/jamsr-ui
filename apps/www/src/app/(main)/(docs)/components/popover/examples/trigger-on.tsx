import { IconButton, Popover, Typography } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const PopoverTriggerOnHover = () => {
  return (
    <div className="grid place-content-center">
      <Popover
        trigger={
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        }
        className="p-2"
        triggerOn="hover"
      >
        <Typography as="p">This is a Popover content</Typography>
      </Popover>
    </div>
  );
};
