import { ArrowRightIcon } from "@/components/icons";
import { Button } from "@jamsr-ui/react";
import { CloseIcon, EmailIcon, ImageAddIcon } from "@jamsr-ui/shared-icons";

export const ButtonWithIcons = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button startContent={<EmailIcon />} color="success">
        Email
      </Button>
      <Button
        endContent={<ArrowRightIcon />}
        variant="outlined"
        color="primary"
      >
        Call us
      </Button>
      <Button endContent={<ImageAddIcon />} color="success">
        Upload Files
      </Button>
      <Button endContent={<CloseIcon />} variant="outlined" color="danger">
        Delete user
      </Button>
    </div>
  );
};
