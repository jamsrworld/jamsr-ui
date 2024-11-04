import { type AutocompleteItemProps, type AutocompleteProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    autocomplete?: Partial<AutocompleteProps>;
    autocompleteItem?: Partial<AutocompleteItemProps>;
  }
}
