"use client";

import { Accordion, AccordionItem } from "@jamsr-ui/react";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionWithoutIcon = () => {
  return (
    <Accordion>
      <AccordionItem heading="Accordion 1" indicator={null}>
        {content}
      </AccordionItem>
      <AccordionItem heading="Accordion 2" indicator={null}>
        {content}
      </AccordionItem>
      <AccordionItem isDisabled heading="Accordion 3" indicator={null}>
        {content}
      </AccordionItem>
    </Accordion>
  );
};
