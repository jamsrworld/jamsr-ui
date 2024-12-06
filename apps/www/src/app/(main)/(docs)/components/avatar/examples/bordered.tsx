import { type AvatarProps } from "@jamsr-ui/react";
import { AvatarUsage } from "./usage";

export const AvatarBordered = () => {
  const colors: AvatarProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex gap-4">
      {colors.map((color) => (
        <AvatarUsage key={color} color={color} isBordered />
      ))}
    </div>
  );
};
