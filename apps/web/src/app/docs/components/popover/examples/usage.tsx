"use client";

import { Button } from "ui/button";
import { Popover } from "ui/popover";

export const PopoverUsage = (props: Popover.Props) => {
  return (
    <Popover {...props}>
      <Popover.Trigger render={<Button>Click Me!</Button>} />
      <Popover.Content>
        Popover is a non-modal dialog that floats around its disclosure.
        It&apos;s commonly used for displaying additional rich content on top of
        something.
      </Popover.Content>
    </Popover>
  );
};
