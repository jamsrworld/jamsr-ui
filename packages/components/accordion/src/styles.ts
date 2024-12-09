import {
  focusVisibleClasses,
  radiusBaseVariant,
  radiusVariant,
  tv,
  type VariantProps,
} from "@jamsr-ui/utils";

export const test = "";
export const accordion = tv({
  base: "flex flex-col overflow-hidden",
  variants: {
    fullWidth: {
      true: "w-full",
    },
    variant: {
      light: "divide-y divide-divider-light",
      splitted: "gap-2",
      outlined: "divide-y divide-divider-light border-2 border-divider-light",
      elevated: "divide-y divide-divider-light shadow-sm",
    },
    radius: radiusBaseVariant,
  },
  defaultVariants: {
    variant: "light",
    radius: "md",
  },
});

export const accordionItem = tv({
  slots: {
    base: "flex flex-col bg-content1 px-4",
    header: "flex items-center gap-2",
    trigger: [
      "flex size-full items-center gap-3 py-4 disabled:cursor-not-allowed disabled:opacity-50",
      ...focusVisibleClasses,
    ],
    startContent: "shrink-0",
    endContent: "shrink-0",
    mainContent: "flex flex-1 flex-col text-start",
    heading: "text-base font-medium text-foreground",
    subheading: "text-sm font-normal text-foreground-500",
    panel: "py-2 text-base",
    indicator:
      "rotate-0 transition-transform duration-500 data-[open=true]:-rotate-180",
  },
  variants: {
    hideIndicator: {
      true: {
        indicator: "hidden",
      },
    },
    variant: {
      light: {},
      splitted: {},
      outlined: {},
      elevated: {},
    },
    radius: radiusVariant("base"),
  },
  defaultVariants: {
    color: "default",
    hideIndicator: false,
    radius: "none",
  },
});

export type AccordionGroupVariantProps = VariantProps<typeof accordion>;
export type AccordionItemVariantProps = VariantProps<typeof accordionItem>;
export type AccordionItemSlots = keyof ReturnType<typeof accordionItem>;
