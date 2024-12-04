"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import { Button, Menu, MenuItem } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

export const MenuControlled = () => {
  const { isOpen, onToggle, setIsOpen } = useDisclosure();
  return (
    <div className="flex items-center justify-center gap-4">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <MenuItem>Undo</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
        <MenuItem isDisabled>Redo</MenuItem>
        <MenuItem>Cut</MenuItem>
        <MenuItem isDisabled>Edit</MenuItem>
        <MenuItem className="hover:bg-danger">Delete</MenuItem>
      </Menu>
      <Button onClick={onToggle}> {isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
