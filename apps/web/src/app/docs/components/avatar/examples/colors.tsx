import { Avatar } from "jamsrui/avatar";

export const AvatarColors = () => {
  const colors: Avatar.Props["color"][] = [
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
          key={color}
          color={color}
        >
          <Avatar.Image alt="John Deo" />
          <Avatar.Fallback />
        </Avatar>
      ))}
    </div>
  );
};
