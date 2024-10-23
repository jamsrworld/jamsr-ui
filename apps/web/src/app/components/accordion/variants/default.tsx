import { Accordion, AccordionItem, type AccordionProps } from "@jamsr-ui/react";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionDefault = (arg: AccordionProps) => {
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
      <AccordionItem aria-label="Accordion 4" heading="Accordion 4">
        {defaultContent2}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 5" heading="Accordion 5">
        {defaultContent}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 6" heading="Accordion 6">
        {defaultContent2}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 7" isDisabled heading="Accordion 7">
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
