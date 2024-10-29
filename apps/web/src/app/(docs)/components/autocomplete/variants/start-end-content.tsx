import { EmailIcon, EyeOpenIcon } from "@jamsr-ui/shared-icons";
import { AutocompleteDefault } from "./default";

export const AutocompleteStartEndContent = () => {
  return (
    <AutocompleteDefault
      startContent={<EmailIcon />}
      endContent={<EyeOpenIcon />}
    />
  );
};
