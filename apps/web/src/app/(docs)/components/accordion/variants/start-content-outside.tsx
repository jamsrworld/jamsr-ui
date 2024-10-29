import {
  Accordion,
  AccordionItem,
  type AccordionProps,
  Button
} from "@jamsr-ui/react";
import { TrashIcon } from "@jamsr-ui/shared-icons";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionStartContentOutside = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        startContent={
          <Button aria-label="Delete" isIconOnly color="danger">
            <TrashIcon />
          </Button>
        }
        startContentPlacement="outside"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        startContent={
          <Button aria-label="Delete" isIconOnly color="danger">
            <TrashIcon />
          </Button>
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
          <Button aria-label="Delete" isIconOnly color="danger">
            <TrashIcon />
          </Button>
        }
        startContentPlacement="outside"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
