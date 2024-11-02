import {
  Accordion,
  AccordionItem,
  type AccordionProps,
  Avatar,
} from "@jamsr-ui/react";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionEndContent = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        endContent={
          <Avatar alt="avatar" src="https://i.pravatar.cc/300" size="lg" />
        }
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        endContent={
          <Avatar alt="avatar" src="https://i.pravatar.cc/300?2" size="lg" />
        }
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
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};