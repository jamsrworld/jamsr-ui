"use client";

import {
  Accordion,
  AccordionItem,
  type AccordionItemIndicatorProps,
  type AccordionProps,
} from "@jamsr-ui/react";
import { MinusIcon, PlusIcon } from "@jamsr-ui/shared-icons";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

const Indicator = (props: AccordionItemIndicatorProps) => {
  const { isOpen } = props;
  return isOpen ? <MinusIcon /> : <PlusIcon />;
};

export const AccordionCustomIcon = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem title="Accordion 1" indicator={Indicator}>
        {defaultContent}
      </AccordionItem>
      <AccordionItem title="Accordion 2" indicator={Indicator}>
        {defaultContent2}
      </AccordionItem>
      <AccordionItem isDisabled title="Accordion 3" indicator={Indicator}>
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
