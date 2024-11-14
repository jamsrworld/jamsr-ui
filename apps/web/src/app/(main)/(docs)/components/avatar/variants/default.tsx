import { Avatar, type AvatarProps } from "@jamsr-ui/react";
import { useId } from "react";

export const AvatarDefault = (props: Partial<AvatarProps>) => {
  const id = useId();
  return (
    <Avatar
      alt="image"
      className="flex"
      src={`https://i.pravatar.cc/300?u=${id}`}
      width={100}
      height={100}
      {...props}
    />
  );
};
