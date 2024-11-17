import { Accordion, AccordionItem } from "@jamsr-ui/react";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionSubheading = () => {
  return (
    <Accordion>
      <AccordionItem heading="Accordion 1" subheading="Press to expand item 1">
        {content}
      </AccordionItem>
      <AccordionItem heading="Accordion 2" subheading="Press to expand item 2">
        {content}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Accordion 3"
        subheading="Disabled Accordion Item"
      >
        {content}
      </AccordionItem>
    </Accordion>
  );
};
