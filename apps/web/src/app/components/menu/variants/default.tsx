import { Button, Menu, MenuItem } from "@jamsr-ui/react";
import { ChevronUp, Info, SearchIcon } from "@jamsr-ui/shared-icons";

export const MenuDefault = () => {
  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUp />}>Open Me</Button>}
      >
        <MenuItem>Undo</MenuItem>
        <MenuItem startContent={<Info className="size-5" />}>Info</MenuItem>
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
        <MenuItem className="data-[active=true]:bg-danger">Delete</MenuItem>
      </Menu>
    </div>
  );
};