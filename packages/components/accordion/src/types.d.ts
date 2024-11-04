import { type AccordionProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    accordion?: Pick<AccordionProps, "className">;
  }
}
