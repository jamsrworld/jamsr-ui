import { Email } from "@jamsr-ui/shared-icons";
import { SelectDefault } from "./default";

export const SelectStartEndItems = () => {
  return (
    <>
      <SelectDefault startContent="$" />
      <SelectDefault endContent="%" />
      <SelectDefault startContent={<Email />} />
      <SelectDefault endContent={<Email />} />
      <SelectDefault
        startContent={<Email />}
        endContent={<Email />}
      />
    </>
  );
};
