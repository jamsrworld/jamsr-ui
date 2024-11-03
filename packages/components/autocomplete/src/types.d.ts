import { type AutocompleteProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    autocomplete?: Pick<AutocompleteProps, "className" | "classNames">;
  }
}
