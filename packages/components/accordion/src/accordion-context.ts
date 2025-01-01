import { createContext } from "@jamsr-ui/utils";
import { type AccordionProps } from "./accordion";
import { type AccordionItemVariantProps } from "./styles";

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
  hideIndicator?: AccordionItemVariantProps["hideIndicator"];
  variant?: AccordionProps["variant"];
  radius?: AccordionProps["radius"];
};

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContextType>({
    name: "AccordionItemContext",
    strict: true,
    errorMessage: "useAccordionItemContext must be used within an Accordion",
  });
