import { Avatar } from "@jamsr-ui/avatar";
import type { AccordionProps } from "../../src";
import { Accordion, AccordionItem } from "../../src";
import { defaultContent, defaultContent2, defaultContent3 } from "./shared";

export const EndContentOutsideAccordion = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        endContent={
          <Avatar alt="avatar" src="https://i.pravatar.cc/300" size="lg" />
        }
        endContentPlacement="outside"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        endContent={
          <Avatar alt="avatar" src="https://i.pravatar.cc/300?2" size="lg" />
        }
        endContentPlacement="outside"
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Accordion 3"
        subheading="Disabled Accordion Item"
        endContent={
          <Avatar alt="avatar" src="https://i.pravatar.cc/300?3" size="lg" />
        }
        endContentPlacement="outside"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
