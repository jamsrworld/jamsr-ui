import { EmailIcon, EyeOpenIcon } from "@jamsr-ui/shared-icons";
import { AutocompleteUsage } from "./usage";

export const AutocompleteStartEndContent = () => {
  return (
    <AutocompleteUsage
      startContent={<EmailIcon />}
      endContent={<EyeOpenIcon />}
    />
  );
};
