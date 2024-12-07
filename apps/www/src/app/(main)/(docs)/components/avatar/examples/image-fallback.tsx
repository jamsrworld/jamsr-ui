"use client";

import { Avatar } from "@jamsr-ui/react";

export const AvatarImageFallback = () => {
  return (
    <div className="flex gap-4">
      <Avatar
        alt="image"
        className="flex"
        src="https://error.jamsrworld.com/error.png"
        width={100}
        height={100}
        fallback={({ name }) =>
          `https://avatars.jamsrworld.com/username?username=${name}`
        }
      />
      <Avatar
        alt="image"
        className="flex"
        src="https://error.jamsrworld.com/error.png"
        width={100}
        height={100}
        fallback={({ name }) =>
          `https://avatars.jamsrworld.com/public?username=${name}`
        }
      />
      <Avatar
        alt="image"
        className="flex"
        src="https://error.jamsrworld.com/error.png"
        width={100}
        height={100}
        fallback="https://i.pravatar.cc/150?u=random123"
      />
      <Avatar
        alt="image"
        className="flex"
        src="https://error.jamsrworld.com/error.png"
        width={100}
        height={100}
      />
    </div>
  );
};
