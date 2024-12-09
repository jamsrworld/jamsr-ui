import type { VariantProps } from "@jamsr-ui/utils";
import { radiusVariant, tv } from "@jamsr-ui/utils";

export const test = "";
export const autocompleteVariant = tv({
  slots: {
    base: ["group relative flex w-full flex-col text-sm"],
    popover:
      "z-popover flex flex-col overflow-hidden rounded-2xl bg-content1 shadow-md backdrop-blur-3xl focus:outline-none",
    content: "flex flex-col gap-px overflow-y-auto p-2",
    emptyContent: "text-foreground-500",
    item: [
      "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-xl p-2 text-sm",
      "ui-hover:bg-content2",
      "ui-active:bg-content2",
      "ui-selected:bg-content2/50",
      "ui-disabled:cursor-not-allowed ui-disabled:opacity-60",
    ],
  },
  variants: { radius: radiusVariant(["popover", "item"]) },
  defaultVariants: {
    radius: "md",
  },
});

export type AutocompleteSlots = keyof ReturnType<typeof autocompleteVariant>;
export type AutocompleteVariantProps = VariantProps<typeof autocompleteVariant>;
