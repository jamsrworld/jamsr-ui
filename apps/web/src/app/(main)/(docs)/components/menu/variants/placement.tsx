import { Button, Menu, MenuItem, type MenuProps } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

export const MenuPlacement = () => {
  const placements: MenuProps["placement"][] = [
    "bottom",
    "bottom-end",
    "bottom-start",
    "left",
    "left-end",
    "left-start",
    "right",
    "right-end",
    "right-start",
    "top",
    "top-end",
    "top-start",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <Menu
          classNames={{
            popover: "min-w-[300px]",
          }}
          trigger={<Button endContent={<ChevronUpIcon />}>{placement}</Button>}
          key={placement}
          placement={placement}
        >
          <MenuItem>Undo</MenuItem>
          <MenuItem>Info</MenuItem>
          <MenuItem>Search</MenuItem>
          <MenuItem isDisabled>Redo</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem isDisabled>Edit</MenuItem>
          <MenuItem className="hover:bg-danger">Delete</MenuItem>
        </Menu>
      ))}
    </div>
  );
};
