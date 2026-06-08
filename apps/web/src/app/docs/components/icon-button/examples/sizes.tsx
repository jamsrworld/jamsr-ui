import { EmailIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";

export const IconButtonSizes = () => {
  return (
    <div className="flex items-center gap-4">
      <IconButton
        label="sm Size IconButton"
        size="sm"
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        label="md Size IconButton"
        size="md"
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        label="lg Size IconButton"
        size="lg"
      >
        <EmailIcon />
      </IconButton>
    </div>
  );
};
