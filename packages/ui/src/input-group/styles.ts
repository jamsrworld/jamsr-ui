import { tv } from "tailwind-variants";

import { focusWithinClasses } from "../utils/variants";

export const inputGroupStyles = tv({
  slots: {
    root: [
      "flex items-center group overflow-hidden",
      "data-disabled:status-disabled",
    ],
    prefix: "pl-3 text-sm text-foreground-secondary select-none",
    suffix: "pr-3 text-sm text-foreground-secondary select-none",
    input: [
      "placeholder:text-foreground-secondary bg-transparent font-normal",
      "grow outline-none",
    ],
  },
  variants: {
    variant: {
      bordered: {
        root: [
          "border border-border focus-within:border-focus",
          "data-hovered:not-focus-within:border-border-dark",
          "has-data-invalid:border-danger!",
        ],
      },
      solid: {
        root: ["bg-surface data-hovered:bg-surface/90", ...focusWithinClasses],
      },
    },
    size: {
      sm: { input: "px-3 py-1.5 text-sm placeholder:text-sm" },
      md: { input: "px-3 py-2 text-sm placeholder:text-sm" },
      lg: { input: "px-3 py-2 text-base placeholder:text-base" },
    },
    radius: {
      none: { root: "rounded-none" },
      sm: { root: "rounded-sm" },
      md: { root: "rounded-md" },
      lg: { root: "rounded-lg" },
      full: { root: "rounded-full" },
    },
  },
  defaultVariants: {
    radius: "md",
    variant: "solid",
    size: "md",
  },
});
