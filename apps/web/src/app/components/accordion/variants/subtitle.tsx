import { Accordion, AccordionItem, AccordionProps } from "@jamsr-ui/react";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionSubtitle = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        title="Accordion 1"
        subtitle="Press to expand item 1"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        title="Accordion 2"
        subtitle="Press to expand item 2"
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        isDisabled
        title="Accordion 3"
        subtitle="Disabled Accordion Item"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
