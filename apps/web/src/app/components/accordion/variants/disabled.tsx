import { Accordion, AccordionItem, type AccordionProps } from "@jamsr-ui/react";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionDisabled = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem aria-label="Accordion 1" heading="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 2" heading="Accordion 2">
        {defaultContent2}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 3" heading="Accordion 3">
        {defaultContent3}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 4" isDisabled heading="Accordion 4">
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
