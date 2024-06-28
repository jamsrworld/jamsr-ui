import { type useInteractions } from "@floating-ui/react";
import { createContext } from "@jamsr-ui/utils";
import type { SelectionSet } from "./use-autocomplete";

export type AutocompleteContextType = {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>["getItemProps"];
  handleSelect: (args: { value: string; label: string }) => void;
  value: SelectionSet;
};

export const [AutocompleteProvider, useAutocompleteContext] =
  createContext<AutocompleteContextType>({
    name: "Autocomplete",
    strict: true,
  });
