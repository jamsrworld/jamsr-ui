import { Badge, BadgeProps } from "@jamsr-ui/react";

export const BadgeColors = () => {
  const colors: BadgeProps["color"][] = [
    "default",
    "danger",
    "primary",
    "secondary",
    "success",
    "warning",
  ];
  return (
    <div className="flex gap-4">
      {colors.map((color) => (
        <Badge
          color={color}
          key={color}
        >
          {color}
        </Badge>
      ))}
    </div>
  );
};
