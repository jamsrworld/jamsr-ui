import { IconButton } from "jamsrui/icon-button";
import { EmailIcon } from "@jamsrui/icons";

export const IconButtonDisabled = () => {
  return (
    <IconButton
      label="Disabled Icon Button"
      disabled
    >
      <EmailIcon />
    </IconButton>
  );
};
