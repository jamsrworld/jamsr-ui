import { type useInteractions } from "@floating-ui/react";
import { createContext } from "@jamsr-ui/utils";
import { type autocompleteVariant } from "./styles";

export type AutocompleteContextType = {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>["getItemProps"];
  handleSelect: (args: { value: string; label: string }) => void;
  value: string[];
  styles: ReturnType<typeof autocompleteVariant>;
  focusInput: () => void;
};

export const [AutocompleteProvider, useAutocompleteContext] =
  createContext<AutocompleteContextType>({
    name: "Autocomplete",
    strict: true,
    errorMessage: "useAutocompleteContext must be used within an Autocomplete",
  });
