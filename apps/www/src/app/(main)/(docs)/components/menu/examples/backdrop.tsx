import { Button, Menu, MenuItem, type MenuProps } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

const MenuUsage = (props: Pick<MenuProps, "backdrop">) => {
  const { backdrop } = props;
  return (
    <Menu
      classNames={{
        popover: "min-w-[300px]",
      }}
      trigger={
        <Button endContent={<ChevronUpIcon />}>{backdrop ?? "Open Me"}</Button>
      }
      backdrop={backdrop}
    >
      <MenuItem>Undo</MenuItem>
      <MenuItem>Info</MenuItem>
      <MenuItem>Search</MenuItem>
      <MenuItem isDisabled>Redo</MenuItem>
      <MenuItem>Cut</MenuItem>
      <MenuItem isDisabled>Edit</MenuItem>
      <MenuItem className="hover:bg-danger">Delete</MenuItem>
    </Menu>
  );
};

export const MenuBackdrop = () => {
  return (
    <div className="flex justify-center gap-4">
      <MenuUsage backdrop="transparent" />
      <MenuUsage backdrop="opaque" />
      <MenuUsage backdrop="blur" />
    </div>
  );
};
