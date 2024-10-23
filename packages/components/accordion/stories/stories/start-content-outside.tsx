import { Avatar } from "@jamsr-ui/avatar";
import { Accordion, AccordionItem, AccordionProps } from "../../src";
import { defaultContent, defaultContent2, defaultContent3 } from "./shared";

export const StartContentOutsideAccordion = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        startContent={
          <Avatar
            alt="avatar"
            src="https://i.pravatar.cc/300"
            size="lg"
          />
        }
        startContentPlacement="outside"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        startContent={
          <Avatar
            alt="avatar"
            src="https://i.pravatar.cc/300?2"
            size="lg"
          />
        }
        startContentPlacement="outside"
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Accordion 3"
        subheading="Disabled Accordion Item"
        startContent={
          <Avatar
            alt="avatar"
            src="https://i.pravatar.cc/300?3"
            size="lg"
          />
        }
        startContentPlacement="outside"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
