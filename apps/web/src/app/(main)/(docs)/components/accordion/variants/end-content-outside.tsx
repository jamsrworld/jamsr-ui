import { Accordion, AccordionItem, Button } from "@jamsr-ui/react";
import { TrashIcon } from "@jamsr-ui/shared-icons";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

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
        {content}
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
        {content}
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
        {content}
      </AccordionItem>
    </Accordion>
  );
};
