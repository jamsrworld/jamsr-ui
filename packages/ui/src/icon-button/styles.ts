import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses, variantStyles } from "../utils/variants";

export const iconButtonStyles = tv({
  extend: variantStyles,
  base: [
    "cursor-interactive relative inline-flex items-center justify-center shrink-0",
    "disabled:status-disabled",
    "transition-[scale] duration-150 data-pressed:scale-98",
    ...dataFocusVisibleClasses,
  ],
  variants: {
    variant: {
      solid: "",
    },
    color: {
      primary: "",
      secondary: "",
      default: "",
      success: "",
      warning: "",
      danger: "",
    },
    size: {
      sm: "size-6 rounded text-sm",
      md: "size-8 rounded-lg text-base",
      lg: "size-10 rounded-xl text-lg",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
  },
});
