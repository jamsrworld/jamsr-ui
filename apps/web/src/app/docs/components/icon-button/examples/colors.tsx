import { IconButton } from "jamsrui/icon-button";
import { EmailIcon } from "@jamsrui/icons";

export const IconButtonColors = () => {
  const colors: IconButton.Props["color"][] = [
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
        <IconButton
          label={`${color} Icon Button`}
          key={color}
          color={color}
        >
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
