"use client";

import { CheckIcon, EmailIcon } from "@/icons";
import { Chip } from "ui/chip";

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
