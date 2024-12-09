import { Button, Menu, MenuItem } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

export const MenuColors = () => {
  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
      >
        <MenuItem color="default">Default</MenuItem>
        <MenuItem color="primary">Primary</MenuItem>
        <MenuItem color="secondary">Secondary</MenuItem>
        <MenuItem color="success">Success</MenuItem>
        <MenuItem color="warning">Warning</MenuItem>
        <MenuItem color="danger">Danger</MenuItem>
      </Menu>
    </div>
  );
};
