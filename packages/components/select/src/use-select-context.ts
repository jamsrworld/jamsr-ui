import { type useInteractions } from "@floating-ui/react";
import { createContext } from "@jamsr-ui/utils";

export type SelectContextType = {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>["getItemProps"];
  handleSelect: (index: number | null) => void;
  setValue: (value: string[]) => void;
  isMultiple: boolean;
  value: string[];
};

export const [SelectProvider, useSelectContext] =
  createContext<SelectContextType>({
    name: "Select",
    strict: true,
  });
