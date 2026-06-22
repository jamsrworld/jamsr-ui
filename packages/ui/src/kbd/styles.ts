import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const kbdStyles = tv({
  base: [
    "inline-flex items-center justify-center gap-1",
    "rounded-md border border-border bg-surface-secondary",
    "px-1.5 py-0.5",
    "font-mono text-xs font-medium text-foreground-secondary",
    "shadow-sm",
  ],
  variants: {
    size: {
      sm: "px-1 py-0.5 text-[10px]",
      md: "px-1.5 py-0.5 text-xs",
      lg: "px-2 py-1 text-sm",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type KbdVariants = VariantProps<typeof kbdStyles>;
