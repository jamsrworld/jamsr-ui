import { Accordion, AccordionItem, AccordionProps } from "../../src";
import { defaultContent, defaultContent2, defaultContent3 } from "./shared";

export const DefaultAccordion = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem title="Accordion 1">{defaultContent}</AccordionItem>
      <AccordionItem title="Accordion 2">{defaultContent2}</AccordionItem>
      <AccordionItem
        isDisabled
        title="Accordion 3"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};
