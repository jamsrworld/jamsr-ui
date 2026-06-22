"use client";

import { useDisclosure } from "ui/hooks";
import { InfoIcon } from "@/icons";
import { Button } from "ui/button";
import { IconButton } from "ui/icon-button";
import { Popover } from "ui/popover";

export const PopoverControlled = (props: Popover.Props) => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure();
  return (
    <div className="flex flex-col items-center gap-4">
      <Popover
        open={isOpen}
        onOpenChange={setIsOpen}
        {...props}
      >
        <Popover.Trigger
          render={
            <IconButton label="Popover Trigger">
              <InfoIcon />
            </IconButton>
          }
        />
        <Popover.Content>
          Popover is a non-modal dialog that floats around its disclosure.
          It&apos;s commonly used for displaying additional rich content on top
          of something.
        </Popover.Content>
      </Popover>
      <Button onClick={onToggle}>{isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
