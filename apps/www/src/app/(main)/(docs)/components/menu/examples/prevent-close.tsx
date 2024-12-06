"use client";

import { Button, Menu, MenuItem, toast } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

export const MenuPreventClose = () => {
  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
      >
        <MenuItem
          onClick={() => toast.success("Clicked Undo")}
          preventCloseOnClick
        >
          Click me here!
        </MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
        <MenuItem isDisabled>Redo</MenuItem>
        <MenuItem>Cut</MenuItem>
        <MenuItem isDisabled>Edit</MenuItem>
        <MenuItem className="hover:bg-danger">Delete</MenuItem>
      </Menu>
    </div>
  );
};
