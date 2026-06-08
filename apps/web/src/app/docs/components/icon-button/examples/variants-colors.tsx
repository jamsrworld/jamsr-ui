import { IconButton } from "jamsrui/icon-button";
import { EmailIcon } from "@jamsrui/icons";

export const IconButtonVariantsColors = () => {
  const variants: IconButton.Props["variant"][] = [
    "solid",
    "light",
    "bordered",
    "text",
    "soft",
  ];
  const colors: IconButton.Props["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-col flex-wrap gap-4">
      {variants.map((variant) => (
        <div
          key={variant}
          className="flex flex-wrap gap-4"
        >
          {colors.map((color) => (
            <IconButton
              label={`${variant} - ${color}`}
              key={`${variant}-${color}`}
              variant={variant}
              color={color}
            >
              <EmailIcon />
            </IconButton>
          ))}
        </div>
      ))}
    </div>
  );
};
