import { createContext } from "@jamsr-ui/utils";

export type AccordionItemRefType = {
  isDisabled: boolean;
  focus: () => void;
};

export type AccordionItemContextType = {
  index: number;
  onToggle: () => void;
  onFocusPrevious: () => void;
  onFocusNext: () => void;
  onFocusFirst: () => void;
  onFocusLast: () => void;
  isOpen: boolean;
  ref: React.Ref<AccordionItemRefType | null>;
};

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContextType>({
    name: "AccordionItemContext",
    strict: true,
  });
