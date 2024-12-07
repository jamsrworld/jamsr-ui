import { Accordion, AccordionItem, Button, IconButton } from "@jamsr-ui/react";
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
          <IconButton aria-label="Delete" variant="outlined" color="danger">
            <TrashIcon />
          </IconButton>
        }
        endContentPlacement="outside"
      >
        {content}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        endContent={
          <IconButton aria-label="Delete" variant="outlined" color="danger">
            <TrashIcon />
          </IconButton>
        }
        endContentPlacement="outside"
      >
        {content}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Disabled Accordion"
        subheading="Press to expand item 3"
        endContent={
          <IconButton aria-label="Delete" variant="outlined" color="danger">
            <TrashIcon />
          </IconButton>
        }
        endContentPlacement="outside"
      >
        {content}
      </AccordionItem>
    </Accordion>
  );
};
