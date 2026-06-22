"use client";

import { EmailIcon, TrashIcon } from "@/icons";
import { Button } from "ui/button";

export const ButtonWithIcons = (props: Button.Props) => {
  return (
    <div className="flex flex-row gap-4">
      <Button {...props}>
        <EmailIcon />
        Email
      </Button>
      <Button {...props}>
        Call us
        <TrashIcon />
      </Button>
    </div>
  );
};
