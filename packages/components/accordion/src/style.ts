import { focusVisibleClasses, tv, type VariantProps } from "@jamsr-ui/utils";

export const accordion = tv({
  base: "flex flex-col gap-2",
  variants: {
    fullWidth: {
      true: "w-full",
    },
  },
});

export const accordionItem = tv({
  slots: {
    base: "flex flex-col rounded-xl bg-background-secondary px-4",
    header: "flex items-center gap-2",
    trigger: [
      "flex size-full items-center gap-3 py-4 disabled:cursor-not-allowed disabled:opacity-50",
      ...focusVisibleClasses,
    ],
    startContent: "shrink-0",
    endContent: "shrink-0",
    mainContent: " flex flex-1 flex-col text-start",
    heading: "text-base font-medium text-foreground",
    subheading: "text-sm font-normal text-foreground-500",
    panel: "py-2 text-foreground-secondary",
    indicator:
      "rotate-0 transition-transform duration-500 data-[open=true]:-rotate-180",
  },
  variants: {
    hideIndicator: {
      true: {
        indicator: "hidden",
      },
    },
  },
});

export type AccordionGroupVariantProps = VariantProps<typeof accordion>;
export type AccordionItemVariantProps = VariantProps<typeof accordionItem>;
export type AccordionItemSlots = keyof ReturnType<typeof accordionItem>;
