import { SearchIcon } from "@/components/icons";
import { Button, Kbd, Menu, MenuItem } from "@jamsr-ui/react";
import { ChevronUpIcon, InfoIcon, TrashIcon } from "@jamsr-ui/shared-icons";

export const MenuStartEndContent = () => {
  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
      >
        <MenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>U</Kbd>}
        >
          Undo
        </MenuItem>
        <MenuItem
          startContent={
            <InfoIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>I</Kbd>}
        >
          Info
        </MenuItem>
        <MenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>K</Kbd>}
        >
          Search
        </MenuItem>
        <MenuItem
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>C</Kbd>}
        >
          Cut
        </MenuItem>
        <MenuItem
          className="hover:bg-danger"
          endContent={<Kbd keys={["command"]}>D</Kbd>}
          startContent={
            <TrashIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};
