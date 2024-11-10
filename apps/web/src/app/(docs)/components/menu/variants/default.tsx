import { Button, Menu, MenuItem, type MenuProps } from "@jamsr-ui/react";
import { ChevronUpIcon, InfoIcon, SearchIcon } from "@jamsr-ui/shared-icons";

export const MenuDefault = (props: Partial<MenuProps>) => {
  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
        {...props}
      >
        <MenuItem>Undo</MenuItem>
        <MenuItem startContent={<InfoIcon className="size-5" />}>Info</MenuItem>
        <MenuItem
          startContent={
            <SearchIcon className="text-foreground-secondary size-5" />
          }
          endContent={
            <div className="bg-background text-foreground-secondary rounded p-0.5 text-xs">
              Ctrl+K
            </div>
          }
        >
          Search
        </MenuItem>
        <MenuItem disabled>Redo</MenuItem>
        <MenuItem>Cut</MenuItem>
        <Menu trigger="Copy as">
          <MenuItem>Text</MenuItem>
          <MenuItem>Video</MenuItem>
          <MenuItem>Audio</MenuItem>
        </Menu>
        <Menu trigger="Share">
          <MenuItem>Mail</MenuItem>
          <MenuItem>Instagram</MenuItem>
        </Menu>
        <MenuItem disabled>Edit</MenuItem>
        <MenuItem className="ui-active:bg-danger">Delete</MenuItem>
      </Menu>
    </div>
  );
};
