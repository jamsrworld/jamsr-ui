import { Accordion, AccordionItem, Button } from "@jamsr-ui/react";
import { TrashIcon } from "@jamsr-ui/shared-icons";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionEndContentOutside = () => {
  return (
    <Accordion>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        endContent={
          <Button variant="outlined" color="danger" isIconOnly>
            <TrashIcon />
          </Button>
        }
        endContentPlacement="outside"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        endContent={
          <Button variant="outlined" color="danger" isIconOnly>
            <TrashIcon />
          </Button>
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
          <Button variant="outlined" color="danger" isIconOnly>
            <TrashIcon />
          </Button>
        }
        endContentPlacement="outside"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
