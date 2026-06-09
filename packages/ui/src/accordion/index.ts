import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionIndicator,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

import type { AccordionVariants } from "./styles";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Indicator: AccordionIndicator,
});

export namespace Accordion {
  export interface Variants extends AccordionVariants {}
  export interface Props extends AccordionRoot.Props {}
}
