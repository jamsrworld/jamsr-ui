"use client";

import { Avatar } from "jamsrui/avatar";
import { useId } from "react";

export const AvatarUsage = () => {
  const id = useId();
  return (
    <Avatar>
      <Avatar.Image
        alt="John"
        src={`https://i.pravatar.cc/300?u=${id}`}
      />
      <Avatar.Fallback />
    </Avatar>
  );
};
