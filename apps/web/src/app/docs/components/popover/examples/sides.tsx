"use client";

import { Button } from "ui/button";
import { Popover } from "ui/popover";

export const PopoverSides = (props: Popover.Props) => {
  const sides: (
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "inline-end"
    | "inline-start"
  )[] = ["top", "right", "bottom", "left", "inline-end", "inline-start"];
  return (
    <div className="flex flex-wrap gap-4">
      {sides.map((side) => (
        <Popover
          key={side}
          {...props}
        >
          <Popover.Trigger render={<Button>{side}</Button>} />
          <Popover.Content
            slotProps={{
              positioner: {
                side,
              },
            }}
          >
            Popover is a non-modal dialog that floats around its disclosure.
            It&apos;s commonly used for displaying additional rich content on
            top of something.
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
