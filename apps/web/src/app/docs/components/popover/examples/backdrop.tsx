"use client";

import { Button } from "jamsrui/button";
import { Popover } from "jamsrui/popover";
import { Text } from "jamsrui/text";

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
