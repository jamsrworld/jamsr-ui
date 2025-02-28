import { type AutocompleteItemProps, type AutocompleteProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    autocomplete?: Partial<AutocompleteProps>;
    autocompleteItem?: Partial<AutocompleteItemProps>;
  }
}
