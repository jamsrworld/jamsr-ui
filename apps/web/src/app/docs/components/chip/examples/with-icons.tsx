"use client";

import { CheckIcon, EmailIcon } from "@jamsrui/icons";
import { Chip } from "jamsrui/chip";

export const ChipWithIcons = (props: Chip.Props) => {
  return (
    <div className="flex gap-4">
      <Chip {...props}>
        <EmailIcon />
        Default
      </Chip>
      <Chip {...props}>
        Default
        <CheckIcon />
      </Chip>
    </div>
  );
};
