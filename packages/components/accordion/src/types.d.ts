import { type AccordionItemProps, type AccordionProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    accordion?: Partial<AccordionProps>;
    accordionItem?: Partial<AccordionItemProps>;
  }
}
