"use client";

import { Accordion, AccordionItem, type AccordionProps } from "@jamsr-ui/react";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionWithoutIcon = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem heading="Accordion 1" indicator={null}>
        {defaultContent}
      </AccordionItem>
      <AccordionItem heading="Accordion 2" indicator={null}>
        {defaultContent2}
      </AccordionItem>
      <AccordionItem isDisabled heading="Accordion 3" indicator={null}>
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
