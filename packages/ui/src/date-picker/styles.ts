import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const datePickerStyles = tv({
  slots: {
    root: "relative inline-block",
    trigger: [
      "flex items-center gap-2",
      "rounded-md border border-border bg-surface",
      "px-3 py-2",
      "ring-offset-background",
      "hover:bg-surface-secondary",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    ],
    content: [
      "z-50 mt-2 rounded-md border border-border bg-surface p-4 shadow-lg",
    ],
  },
});

export type DatePickerVariants = VariantProps<typeof datePickerStyles>;
