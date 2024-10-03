import { SelectDefault } from "./default";

export const SelectWithoutLabel = () => {
  return (
    <SelectDefault
      placeholder="Select as item..."
      label={undefined}
    />
  );
};
