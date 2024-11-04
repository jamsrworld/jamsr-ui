import { type AccordionItemProps, type AccordionProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    accordion?: Partial<AccordionProps>;
    accordionItem?: Partial<AccordionItemProps>;
  }
}
