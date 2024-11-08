import {
  Accordion,
  AccordionItem,
  type AccordionProps
} from "@jamsr-ui/react";
import { AvatarDefault } from "../../avatar/variants/default";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionStartContent = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        startContent={<AvatarDefault />}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        startContent={<AvatarDefault />}
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Accordion 3"
        subheading="Disabled Accordion Item"
        startContent={<AvatarDefault />}
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
