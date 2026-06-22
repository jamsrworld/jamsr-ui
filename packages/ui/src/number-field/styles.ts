import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses, focusWithinClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const numberFieldStyles = tv({
  slots: {
    root: ["group flex flex-col gap-1 w-full"],
    increment: "h-full w-12 border-l border-l-border grid place-content-center",
    decrement: "h-full w-12 border-r border-r-border grid place-content-center",
    input: [
      "outline-0 px-3 py-1 grow text-sm",
      "focus:z-1 tabular-nums",
      "min-w-0",
    ],
    group: [
      "flex items-center w-full",
      "overflow-hidden",
      ...dataFocusVisibleClasses,
    ],
    scrubArea: "cursor-ew-resize",
    label: "cursor-ew-resize text-sm font-medium text-foreground",
    scrubAreaCursor: "drop-shadow-[0_1px_1px_#0008] filter",
  },
  variants: {
    variant: {
      solid: {
        group: ["bg-surface", ...focusWithinClasses],
      },
      bordered: {
        group: ["border border-border"],
      },
    },
    radius: {
      none: { group: "rounded-none" },
      sm: { group: "rounded-sm" },
      md: { group: "rounded-md" },
      lg: { group: "rounded-lg" },
      xl: { group: "rounded-xl" },
    },
    size: {
      sm: { group: "h-7" },
      md: { group: "h-9" },
      lg: { group: "h-11" },
    },
  },
  defaultVariants: {
    variant: "solid",
    radius: "md",
    size: "md",
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldStyles>;
