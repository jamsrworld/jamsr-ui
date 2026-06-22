import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const otpInputStyles = tv({
  slots: {
    root: "relative flex items-center gap-2 group data-disabled:status-disabled",
    group: "flex gap-1",
    input: "data-disabled:status-disabled",
    slot: [
      "relative flex items-center justify-center data-disabled:status-disabled",
    ],
    separator: "w-4 h-0.5 bg-border",
    caret:
      "absolute pointer-events-none flex w-[1.5px] bg-foreground animate-caret-blink z-1",
  },
  variants: {
    variant: {
      solid: {
        slot: [
          "bg-surface",
          ...dataFocusVisibleClasses,
          "data-invalid:data-focus-visible:outline-danger",
        ],
      },
      bordered: {
        slot: [
          "border-border border",
          ...dataFocusVisibleClasses,
          "data-invalid:data-focus-visible:outline-danger",
        ],
      },
    },
    radius: {
      none: {
        group: "rounded-none",
        separator: "rounded-none",
        slot: "rounded-none",
      },
      sm: {
        group: "rounded-sm",
        separator: "rounded-sm",
        slot: "rounded-sm",
      },
      md: {
        group: "rounded-md",
        slot: "rounded-md",
        separator: "rounded-md",
      },
      lg: {
        group: "rounded-lg",
        separator: "rounded-lg",
        slot: "rounded-lg",
      },
      full: {
        group: "rounded-full",
        separator: "rounded-full",
        slot: "rounded-full",
      },
    },
    size: {
      sm: {
        slot: "w-8 h-8",
        caret: "h-4",
      },
      md: {
        slot: "w-10 h-10",
        caret: "h-5",
      },
      lg: {
        slot: "w-12 h-12",
        caret: "h-6",
      },
    },
  },
  defaultVariants: { radius: "md", size: "md", variant: "solid" },
});

export type OtpInputVariants = VariantProps<typeof otpInputStyles>;
