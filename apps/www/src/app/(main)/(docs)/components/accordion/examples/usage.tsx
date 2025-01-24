import { Accordion, AccordionItem } from "@jamsr-ui/react";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionUsage = () => {
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
      <AccordionItem aria-label="Accordion 4" heading="Accordion 4">
        {content}
      </AccordionItem>
    </Accordion>
  );
};
