import { type useInteractions } from "@floating-ui/react";
import { createContext } from "@jamsr-ui/utils";
import type { SelectionSet } from "./use-select";

export type SelectContextType = {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>["getItemProps"];
  handleSelect: (index: number | null) => void;
  setValue: (value: SelectionSet) => void;
  isMultiple: boolean;
  value: SelectionSet;
};

export const [SelectProvider, useSelectContext] =
  createContext<SelectContextType>({
    name: "Select",
    strict: true,
  });
