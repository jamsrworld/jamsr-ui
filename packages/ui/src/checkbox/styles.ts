import { tv } from "tailwind-variants";

import { focusVisibleClasses } from "../utils/variants";

export const checkboxStyles = tv({
  slots: {
    root: [
      "flex justify-center items-center",
      ...focusVisibleClasses,
      "shrink-0",
      "relative appearance-none",
      "data-disabled:status-disabled data-pressed:scale-90 transition-all duration-300",
      "data-invalid:data-checked:bg-danger",
    ],
    input:
      "absolute opacity-[0.0001] cursor-interactive disabled:cursor-disabled inset-0 z-1",
    content: "flex flex-col justify-center gap-1",
    indicator: "size-3 flex items-center justify-center",
  },
  variants: {
    size: {
      sm: {
        root: "size-4",
      },
      md: {
        root: "size-4.5",
      },
      lg: {
        root: "size-5",
      },
    },
    radius: {
      none: { root: "rounded-none" },
      sm: { root: "rounded-sm" },
      md: { root: "rounded-md" },
      lg: { root: "rounded-lg" },
      full: { root: "rounded-full" },
    },
    variant: {
      bordered: {
        root: [
          "border-default data-hovered:border-default-hover",
          "border data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground",
          "data-invalid:border-danger",
        ],
      },
      solid: {
        root: [
          "bg-surface data-hovered:bg-surface/90 data-checked:bg-primary",
          "data-invalid:outline data-invalid:outline-danger ",
        ],
      },
    },
  },
  defaultVariants: {
    radius: "md",
    size: "md",
    variant: "solid",
  },
});
