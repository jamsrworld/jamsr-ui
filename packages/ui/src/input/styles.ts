import { tv } from "tailwind-variants";

import { focusRingClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const inputStyles = tv({
  base: [
    "outline-none disabled:status-disabled placeholder:text-foreground-secondary bg-transparent font-normal",
  ],
  variants: {
    variant: {
      bordered:
        "border border-border data-hovered:not-focus:border-border-dark focus:border-focus",
      solid: ["bg-surface data-hovered:bg-surface/90", ...focusRingClasses],
    },
    size: {
      sm: "px-3 py-1.5 text-sm placeholder:text-sm",
      md: "px-3 py-2 text-sm placeholder:text-sm",
      lg: "px-3 py-2 text-base placeholder:text-base",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    isInvalid: {
      true: "border-danger!",
    },
  },
  defaultVariants: {
    radius: "md",
    size: "md",
    variant: "solid",
  },
});

export type InputVariants = VariantProps<typeof inputStyles>;
