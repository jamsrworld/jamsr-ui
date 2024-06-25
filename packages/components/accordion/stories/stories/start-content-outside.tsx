import { Avatar } from "@jamsr-ui/avatar";
import { Accordion, AccordionItem, AccordionProps } from "../../src";
import { defaultContent, defaultContent2, defaultContent3 } from "./shared";

export const StartContentOutsideAccordion = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        title="Accordion 1"
        subtitle="Press to expand item 1"
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
        title="Accordion 2"
        subtitle="Press to expand item 2"
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
        title="Accordion 3"
        subtitle="Disabled Accordion Item"
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
