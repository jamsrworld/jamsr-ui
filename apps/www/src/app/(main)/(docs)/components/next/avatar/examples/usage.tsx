import { Avatar } from "@jamsr-ui/next";
import { useId } from "react";

export const AvatarUsage = () => {
  const id = useId();
  return (
    <Avatar
      alt="image"
      className="flex"
      src={`https://i.pravatar.cc/300?u=${id}`}
      width={100}
      height={100}
    />
  );
};
