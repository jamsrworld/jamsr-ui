import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses } from "../utils/variants";

export const checkboxStyles = tv({
  slots: {
    root: [
      "flex justify-center items-center shrink-0 relative appearance-none",
      ...dataFocusVisibleClasses,
      "data-disabled:status-disabled data-pressed:scale-90 transition-scale duration-300",
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
          "bg-surface data-hovered:not(data-checked):bg-surface/90 data-checked:bg-primary",
          "data-invalid:outline-danger ",
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
