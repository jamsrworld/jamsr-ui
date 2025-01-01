"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import { Button, IconButton, Popover, Text } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const PopoverControlled = () => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure();
  return (
    <div className="flex flex-col items-center gap-4">
      <Popover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        trigger={
          <IconButton aria-label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        }
        className="p-2"
        showArrow
      >
        <Text as="p">This is a Popover content</Text>
      </Popover>
      <Button onClick={onToggle}>{isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
