import { IconButton, type IconButtonProps } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const IconButtonVariants = () => {
  const variants: IconButtonProps["variant"][] = [
    "solid",
    "light",
    "outlined",
    "text",
    "flat",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <IconButton
          aria-label={`${variant} Icon Button`}
          color="primary"
          key={variant}
          variant={variant}
        >
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
