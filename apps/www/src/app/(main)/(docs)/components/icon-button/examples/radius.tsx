import { IconButton, type IconButtonProps } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const IconButtonRadius = () => {
  const radii: IconButtonProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ];
  return (
    <div className="flex gap-4">
      {radii.map((radius) => (
        <IconButton
          aria-label={`${radius} Icon Button`}
          key={radius}
          radius={radius}
        >
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
