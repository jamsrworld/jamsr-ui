import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const tagsInputStyles = tv({
  slots: {
    root: [
      "flex flex-wrap gap-2 items-center",
      "w-full rounded-md border border-border bg-surface",
      "px-3 py-2",
      "ring-offset-background",
      "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
    ],
    tag: [
      "inline-flex items-center gap-1",
      "rounded-md bg-surface-secondary px-2 py-0.5 text-sm",
      "transition-colors",
    ],
    tagRemove: [
      "ml-1 rounded-full p-0.5",
      "hover:bg-surface-tertiary",
      "focus:outline-none focus:ring-1 focus:ring-ring",
    ],
    input: [
      "flex-1 min-w-20 bg-transparent text-sm outline-none",
      "placeholder:text-foreground-tertiary",
    ],
  },
});

export type TagsInputVariants = VariantProps<typeof tagsInputStyles>;
