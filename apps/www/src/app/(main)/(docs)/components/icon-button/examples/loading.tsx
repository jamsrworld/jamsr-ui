import { IconButton } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const IconButtonLoading = () => {
  return (
    <div className="flex flex-row gap-4">
      <IconButton aria-label="Loading Icon Button" isDisabled>
        <EmailIcon />
      </IconButton>
    </div>
  );
};
