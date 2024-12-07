import { IconButton, type IconButtonProps } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const IconButtonColors = () => {
  const colors: IconButtonProps["color"][] = [
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
        <IconButton aria-label={`${color} Icon Button`} key={color} color={color}>
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
