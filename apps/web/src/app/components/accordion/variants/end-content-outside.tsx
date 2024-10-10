import {
  Accordion,
  AccordionItem,
  type AccordionProps,
  Button,
} from "@jamsr-ui/react";
import { TrashIcon } from "@jamsr-ui/shared-icons";
import { defaultContent, defaultContent2, defaultContent3 } from "../shared";

export const AccordionEndContentOutside = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        title="Accordion 1"
        subtitle="Press to expand item 1"
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
        title="Accordion 2"
        subtitle="Press to expand item 2"
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
        title="Accordion 3"
        subtitle="Disabled Accordion Item"
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
