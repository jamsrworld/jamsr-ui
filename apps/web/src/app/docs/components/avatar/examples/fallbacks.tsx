"use client";

import { AvatarIcon } from "@jamsrui/icons";
import { Avatar } from "ui/avatar";

export const AvatarFallbacks = (props: Avatar.Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar {...props}>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Avatar {...props}>
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar {...props}>
        <Avatar.Fallback>
          <AvatarIcon />
        </Avatar.Fallback>
      </Avatar>
    </div>
  );
};
