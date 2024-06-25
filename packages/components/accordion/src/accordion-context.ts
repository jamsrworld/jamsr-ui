import { createContext } from "@jamsr-ui/utils";

export type AccordionContextType = {
  index: number;
  onChangeIndex: (index: number) => void;
  isOpen: boolean;
};

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContextType>({
    name: "AccordionContext",
    strict: true,
  });
