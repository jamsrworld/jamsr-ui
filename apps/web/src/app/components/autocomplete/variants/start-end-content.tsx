import { Email, EyeOpen } from "@jamsr-ui/shared-icons";
import { AutocompleteDefault } from "./default";

export const AutocompleteStartEndContent = () => {
  return (
    <AutocompleteDefault
      startContent={<Email />}
      endContent={<EyeOpen />}
    />
  );
};
