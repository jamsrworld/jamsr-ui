import { Avatar, type AvatarProps } from "@jamsr-ui/react";

export const AvatarColors = () => {
  const colors: AvatarProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {colors.map((color) => (
        <Avatar
          alt="John Deo"
          key={color}
          color={color}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};
