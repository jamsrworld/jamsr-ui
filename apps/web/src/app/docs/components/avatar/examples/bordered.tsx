import { Avatar } from "jamsrui/avatar";
import { useId } from "react";

export const AvatarBordered = () => {
  const colors: Avatar.Props["color"][] = [
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
          className="flex"
          key={color}
          color={color}
          isBordered
        >
          <Avatar.Image
            alt="image"
            src={`https://i.pravatar.cc/300?u=${id}${color}`}
          />
          <Avatar.Fallback />
        </Avatar>
      ))}
    </div>
  );
};
