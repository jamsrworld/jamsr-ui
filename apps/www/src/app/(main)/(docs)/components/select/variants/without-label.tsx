import { SelectUsage } from "./usage";

export const SelectWithoutLabel = () => {
  return (
    <SelectUsage
      placeholder="Select as item..."
      label={undefined}
    />
  );
};
