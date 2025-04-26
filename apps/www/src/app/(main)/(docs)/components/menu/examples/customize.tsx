import { Avatar, Menu, MenuItem } from "@jamsr-ui/react";
import { type Variants } from "motion/react";

const motionVariants: Variants = {
  initial: { scale: 0.97 },
  animate: { scale: 1 },
  exit: { scale: 0.97 },
};

export const MenuCustomize = () => {
  return (
    <div className="flex  justify-center">
      <Menu
        radius="2xl"
        classNames={{
          content: "min-w-[300px] bg-content3 border-2 border-primary-400",
          menuItem:
            "py-3 text-base px-4 font-medium hover:text-primary",
        }}
        trigger={<Avatar src="https://i.pravatar.cc/150" alt="JamsrUI" />}
        motionVariants={motionVariants}
      >
        <MenuItem>Undo</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
        <MenuItem>Cut</MenuItem>
      </Menu>
    </div>
  );
};
