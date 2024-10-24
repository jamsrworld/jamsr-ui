import { createContext } from "@jamsr-ui/utils";
import { type AccordionItemVariantProps } from "./style";

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
  color?: AccordionItemVariantProps["color"];
  hideIndicator?: AccordionItemVariantProps["hideIndicator"];
};

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContextType>({
    name: "AccordionItemContext",
    strict: true,
  });
