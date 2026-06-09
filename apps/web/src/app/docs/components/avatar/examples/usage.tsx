"use client";

import { Avatar } from "jamsrui/avatar";
import { useId } from "react";

export const AvatarUsage = (props: Avatar.Props) => {
  const id = useId();
  return (
    <Avatar {...props}>
      <Avatar.Image
        alt="John"
        src={`https://i.pravatar.cc/300?u=${id}`}
      />
      <Avatar.Fallback />
    </Avatar>
  );
};
