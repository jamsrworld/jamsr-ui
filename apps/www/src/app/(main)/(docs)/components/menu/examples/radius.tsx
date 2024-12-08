import { Button, Menu, MenuItem, type MenuProps } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

export const MenuRadius = () => {
  const radii: MenuProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {radii.map((radius) => (
        <Menu
          classNames={{
            popover: "min-w-[300px]",
          }}
          trigger={
            <Button radius={radius} endContent={<ChevronUpIcon />}>
              Open Me {radius}
            </Button>
          }
          radius={radius}
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
