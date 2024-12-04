import { EmailIcon } from "@jamsr-ui/shared-icons";
import { SelectUsage } from "./usage";

export const SelectStartEndItems = () => {
  return (
    <>
      <SelectUsage startContent="$" />
      <SelectUsage endContent="%" />
      <SelectUsage startContent={<EmailIcon />} />
      <SelectUsage endContent={<EmailIcon />} />
      <SelectUsage
        startContent={<EmailIcon />}
        endContent={<EmailIcon />}
      />
    </>
  );
};
