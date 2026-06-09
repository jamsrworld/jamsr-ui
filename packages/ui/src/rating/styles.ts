import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const ratingStyles = tv({
  slots: {
    root: "flex items-center gap-0.5",
    star: [
      "cursor-pointer transition-colors",
      "text-neutral-300 dark:text-neutral-600",
      "hover:text-warning/80",
    ],
  },
  variants: {
    size: {
      sm: { star: "size-4" },
      md: { star: "size-5" },
      lg: { star: "size-6" },
    },
    isReadOnly: {
      true: { star: "cursor-default" },
    },
    isActive: {
      true: { star: "text-warning" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type RatingVariants = VariantProps<typeof ratingStyles>;
