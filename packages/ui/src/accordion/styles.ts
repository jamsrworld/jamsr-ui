import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const accordionStyles = tv({
  slots: {
    root: "flex flex-col",
    item: "bg-surface",
    heading: "flex items-center gap-2",
    trigger: [
      "group flex w-full items-center relative gap-3 py-4 px-4",
      "focus-visible:outline-2 focus-visible:outline-primary focus-visible:z-10",
      "disabled:status-disabled data-disabled:status-disabled",
    ],
    content: "py-2 text-base px-4",
    panel:
      "overflow-hidden h-(--accordion-panel-height) transition-[height] ease-out data-ending-style:h-0 data-starting-style:h-0",
    indicator:
      "rotate-0 transition-transform duration-500 group-data-panel-open:-rotate-180 ml-auto size-3 shrink-0",
  },
  variants: {
    variant: {
      light: {},
      splitted: {
        root: "flex flex-col gap-4",
      },
    },
    radius: {
      none: {
        item: "rounded-none",
        trigger: "rounded-none",
        content: "rounded-none",
      },
      sm: {
        item: "rounded-sm",
        trigger: "rounded-sm",
        content: "rounded-sm",
      },
      md: {
        item: "rounded-md",
        trigger: "rounded-md",
        content: "rounded-md",
      },
      lg: {
        item: "rounded-lg",
        trigger: "rounded-lg",
        content: "rounded-lg",
      },
      full: {
        item: "rounded-full",
        trigger: "rounded-full",
        content: "rounded-full",
      },
    },
  },
  defaultVariants: {
    variant: "light",
    radius: "md",
  },
});

export type AccordionVariants = VariantProps<typeof accordionStyles>;
