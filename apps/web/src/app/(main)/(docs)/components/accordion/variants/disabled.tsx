import { Accordion, AccordionItem } from "@jamsr-ui/react";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionDisabled = () => {
  return (
    <Accordion>
      <AccordionItem aria-label="Accordion 1" heading="Accordion 1">
        {content}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 2" heading="Accordion 2">
        {content}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 3" heading="Accordion 3">
        {content}
      </AccordionItem>
      <AccordionItem
        aria-label="Disabled Accordion"
        isDisabled
        heading="Disabled Accordion"
      >
        {content}
      </AccordionItem>
    </Accordion>
  );
};
