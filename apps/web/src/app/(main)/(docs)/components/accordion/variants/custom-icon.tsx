"use client";

import {
  Accordion,
  AccordionItem,
  type AccordionItemIndicatorProps,
} from "@jamsr-ui/react";
import { MinusIcon, PlusIcon } from "@jamsr-ui/shared-icons";

const Indicator = (props: AccordionItemIndicatorProps) => {
  const { isOpen } = props;
  return isOpen ? <MinusIcon /> : <PlusIcon />;
};

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionCustomIcon = () => {
  return (
    <Accordion>
      <AccordionItem heading="Accordion 1" indicator={Indicator}>
        {content}
      </AccordionItem>
      <AccordionItem heading="Accordion 2" indicator={Indicator}>
        {content}
      </AccordionItem>
      <AccordionItem isDisabled heading="Accordion 3" indicator={Indicator}>
        {content}
      </AccordionItem>
    </Accordion>
  );
};
