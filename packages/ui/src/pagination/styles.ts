import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const paginationStyles = tv({
  slots: {
    root: "flex items-center gap-2",
    item: [
      "flex items-center justify-center",
      "min-w-9 h-9 px-3",
      "rounded-md border border-transparent",
      "text-sm font-medium",
      "transition-colors",
      "hover:bg-surface-secondary",
      "disabled:status-disabled",
    ],
    ellipsis: "flex items-center justify-center text-foreground-secondary",
  },
  variants: {
    isActive: {
      true: {
        item: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
    },
  },
});

export type PaginationVariants = VariantProps<typeof paginationStyles>;
