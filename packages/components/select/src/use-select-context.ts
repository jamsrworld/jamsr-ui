import { type useInteractions } from "@floating-ui/react";
import { createContext, type SlotsToClasses } from "@jamsr-ui/utils";
import { type SelectSlots, type selectVariant } from "./styles";

export type SelectContextType = {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>["getItemProps"];
  handleSelect: (index: number | null) => void;
  setValue: (value: string[]) => void;
  isMultiple: boolean;
  value: string[];
  styles: ReturnType<typeof selectVariant>;
  classNames?: SlotsToClasses<SelectSlots>;
  onSelectValue: (value: string) => void;
};

export const [SelectProvider, useSelectContext] =
  createContext<SelectContextType>({
    name: "Select",
    strict: true,
    errorMessage: "useSelectContext must be used within a Select",
  });
