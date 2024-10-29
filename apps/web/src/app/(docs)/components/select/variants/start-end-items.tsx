import { EmailIcon } from "@jamsr-ui/shared-icons";
import { SelectDefault } from "./default";

export const SelectStartEndItems = () => {
  return (
    <>
      <SelectDefault startContent="$" />
      <SelectDefault endContent="%" />
      <SelectDefault startContent={<EmailIcon />} />
      <SelectDefault endContent={<EmailIcon />} />
      <SelectDefault
        startContent={<EmailIcon />}
        endContent={<EmailIcon />}
      />
    </>
  );
};
