import { Button, Menu, MenuItem } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

export const MenuOffset = () => {
  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
        offset={20}
      >
        <MenuItem>Undo</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
        <Menu offset={8} trigger="More options">
          <MenuItem>Undo</MenuItem>
          <MenuItem>Info</MenuItem>
          <MenuItem>Search</MenuItem>
        </Menu>
      </Menu>
    </div>
  );
};
