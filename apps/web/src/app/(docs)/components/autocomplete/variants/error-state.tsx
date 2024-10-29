import { AutocompleteDefault } from "./default";

export const AutocompleteErrorState = () => {
  return (
    <AutocompleteDefault
      helperText="Please choose one of the options"
      isInvalid
    />
  );
};
