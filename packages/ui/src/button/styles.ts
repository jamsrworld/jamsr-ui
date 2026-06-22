import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses, variantStyles } from "../utils/variants";

export const buttonStyles = tv({
  extend: variantStyles,
  base: [
    "cursor-interactive relative inline-flex py-2 px-4 justify-center items-center gap-2 shrink-0",
    "disabled:status-disabled",
    "font-medium data-pressed:scale-97 transition-[scale] duration-150",
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
      sm: "min-w-16 gap-1 px-3 py-1.5 text-xs",
      md: "min-w-20 gap-2 px-4 py-1.5 text-sm",
      lg: "min-w-30 gap-2 px-5 py-1.5 text-base",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "lg",
  },
});
