"use client";

import { InfoIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { Popover } from "jamsrui/popover";

export const PopoverOpenOnHover = (props: Popover.Props) => {
  return (
    <Popover {...props}>
      <Popover.Trigger
        openOnHover
        render={
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        }
      />
      <Popover.Content>
        Popover is a non-modal dialog that floats around its disclosure.
        It&apos;s commonly used for displaying additional rich content on top of
        something.
      </Popover.Content>
    </Popover>
  );
};
