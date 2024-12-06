import { IconButton, type IconButtonProps } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const IconButtonSizes = () => {
  const sizes: IconButtonProps["size"][] = ["xs", "sm", "md", "lg"];
  return (
    <div className="flex items-center gap-4">
      {sizes.map((size) => (
        <IconButton label={`${size} Size IconButton`} key={size} size={size}>
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
