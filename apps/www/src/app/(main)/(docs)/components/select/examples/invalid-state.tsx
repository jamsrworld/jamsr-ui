import { SelectUsage } from "./usage";

export const SelectInvalidState = () => {
  return (
    <SelectUsage
      placeholder="Choose Fruit"
      isInvalid
      helperText="This field is required"
    />
  );
};
