import { IconButton, type IconButtonProps } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const IconButtonVariantsColors = () => {
  const variants: IconButtonProps["variant"][] = [
    "solid",
    "light",
    "outlined",
    "text",
    "flat",
  ];
  const colors: IconButtonProps["color"][] = [
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
        <div key={variant} className="flex flex-wrap gap-4">
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
