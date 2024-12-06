import { Accordion, AccordionItem, IconButton } from "@jamsr-ui/react";
import { TrashIcon } from "@jamsr-ui/shared-icons";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionStartContentOutside = () => {
  return (
    <Accordion>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        startContent={
          <IconButton label="Delete" color="danger">
            <TrashIcon />
          </IconButton>
        }
        startContentPlacement="outside"
      >
        {content}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        startContent={
          <IconButton label="Delete" color="danger">
            <TrashIcon />
          </IconButton>
        }
        startContentPlacement="outside"
      >
        {content}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Disabled Accordion"
        subheading="Disabled Accordion Item"
        startContent={
          <IconButton label="Delete" color="danger">
            <TrashIcon />
          </IconButton>
        }
        startContentPlacement="outside"
      >
        {content}
      </AccordionItem>
    </Accordion>
  );
};
