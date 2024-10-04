import {
  Accordion,
  AccordionItem,
  type AccordionProps,
  Avatar,
} from "@jamsr-ui/react";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionEndContentOutside = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        title="Accordion 1"
        subtitle="Press to expand item 1"
        endContent={
          <Avatar alt="avatar" src="https://i.pravatar.cc/300" size="lg" />
        }
        endContentPlacement="outside"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        title="Accordion 2"
        subtitle="Press to expand item 2"
        endContent={
          <Avatar alt="avatar" src="https://i.pravatar.cc/300?2" size="lg" />
        }
        endContentPlacement="outside"
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        isDisabled
        title="Accordion 3"
        subtitle="Disabled Accordion Item"
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
