import { Accordion, AccordionItem, type AccordionProps } from "../../src";
import { defaultContent, defaultContent2 } from "./shared";

export const DefaultAccordion = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem aria-label="Accordion 1" heading="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 2" heading="Accordion 2">
        {defaultContent2}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 3" heading="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
};
