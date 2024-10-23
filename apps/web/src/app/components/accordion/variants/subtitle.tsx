import { Accordion, AccordionItem, type AccordionProps } from "@jamsr-ui/react";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionSubtitle = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem heading="Accordion 1" subheading="Press to expand item 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem heading="Accordion 2" subheading="Press to expand item 2">
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Accordion 3"
        subheading="Disabled Accordion Item"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
