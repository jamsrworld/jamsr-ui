"use client";

import { Button } from "ui/button";
import { Popover } from "ui/popover";
import { Text } from "ui/text";

export const PopoverBackdrop = (props: Popover.Props) => {
  return (
    <Popover {...props}>
      <Popover.Trigger render={<Button>Open Popover</Button>} />
      <Popover.Content>
        <Text>
          Popover is a non-modal dialog that floats around its disclosure.
          It&apos;s commonly used for displaying additional rich content on top
          of something.
        </Text>
      </Popover.Content>
    </Popover>
  );
};
