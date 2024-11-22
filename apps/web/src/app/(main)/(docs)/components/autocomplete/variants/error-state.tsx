import { AutocompleteUsage } from "./usage";

export const AutocompleteErrorState = () => {
  return (
    <AutocompleteUsage
      helperText="Please choose one of the options"
      isInvalid
    />
  );
};
