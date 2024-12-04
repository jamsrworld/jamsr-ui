"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import { Button, Popover, Typography } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const PopoverControlled = () => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure();
  return (
    <div className="flex flex-col items-center gap-4">
      <Popover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        trigger={
          <Button isIconOnly>
            <InfoIcon />
          </Button>
        }
        className="p-2"
        showArrow
      >
        <Typography as="p">This is a Popover content</Typography>
      </Popover>
      <Button onClick={onToggle}>{isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
