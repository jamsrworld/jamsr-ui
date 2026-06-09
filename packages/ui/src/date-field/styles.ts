import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const dateFieldStyles = tv({
  slots: {
    root: [
      "flex items-center gap-2",
      "rounded-md border border-border bg-surface",
      "px-3 py-2",
      "ring-offset-background",
      "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
    ],
    segment: [
      "tabular-nums text-sm font-medium",
      "rounded px-0.5",
      "focus:outline-none focus:bg-primary focus:text-primary-foreground",
    ],
    separator: "text-foreground-tertiary",
    calendar: "p-3",
  },
});

export type DateFieldVariants = VariantProps<typeof dateFieldStyles>;
