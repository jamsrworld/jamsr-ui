import { SelectDefault } from "./default";

export const SelectInvalidState = () => {
  return (
    <SelectDefault
      placeholder="Choose Fruit"
      isInvalid
      helperText="This field is required"
    />
  );
};
