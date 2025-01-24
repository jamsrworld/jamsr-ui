import { Avatar, type AvatarProps } from "@jamsr-ui/react";
import { useId } from "react";

export const AvatarBordered = () => {
  const colors: AvatarProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  const id = useId();

  return (
    <div className="flex gap-4">
      {colors.map((color) => (
        <Avatar
          alt="image"
          className="flex"
          src={`https://i.pravatar.cc/300?u=${id}`}
          width={100}
          height={100}
          key={color}
          color={color}
          isBordered
        />
      ))}
    </div>
  );
};
