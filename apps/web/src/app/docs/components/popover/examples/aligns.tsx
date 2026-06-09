"use client";

import { Button } from "jamsrui/button";
import { Popover } from "jamsrui/popover";

export const PopoverAligns = (props: Popover.Props) => {
  const aligns: ("start" | "center" | "end")[] = ["start", "center", "end"];
  return (
    <div className="flex flex-wrap gap-4">
      {aligns.map((align) => (
        <Popover
          key={align}
          {...props}
        >
          <Popover.Trigger render={<Button>{align}</Button>} />
          <Popover.Content
            slotProps={{
              positioner: {
                align,
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
