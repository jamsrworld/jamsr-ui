import { Accordion, AccordionItem } from "@jamsr-ui/react";
import { AvatarUsage } from "../../avatar/variants/usage";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionEndContent = () => {
  return (
    <Accordion>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        endContent={<AvatarUsage />}
      >
        {content}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        endContent={<AvatarUsage />}
      >
        {content}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Disabled Accordion"
        subheading="Disabled Accordion Item"
        endContent={<AvatarUsage />}
      >
        {content}
      </AccordionItem>
    </Accordion>
  );
};
