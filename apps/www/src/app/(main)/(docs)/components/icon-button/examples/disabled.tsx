import { IconButton } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const IconButtonDisabled = () => {
  return (
    <IconButton aria-label="Disabled Icon Button" isDisabled>
      <EmailIcon />
    </IconButton>
  );
};
