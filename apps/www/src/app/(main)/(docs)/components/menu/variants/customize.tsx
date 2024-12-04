import { Button, Menu, MenuItem } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

export const MenuCustomize = () => {
  return (
    <div className="flex  justify-center">
      <Menu
        classNames={{
          popover:
            "min-w-[300px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
      >
        <MenuItem>Undo</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
        <MenuItem>Cut</MenuItem>
      </Menu>
    </div>
  );
};
