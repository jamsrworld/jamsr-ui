import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const switchStyles = tv({
  slots: {
    root: [
      ...dataFocusVisibleClasses,
      "flex group relative cursor-interactive shrink-0 items-center rounded-full p-1",
      "bg-surface-secondary data-pressed:bg-surface-tertiary",
      "data-disabled:status-disabled",
      "border-[0.5px] border-border-light",
    ],
    thumb: [
      "rounded-full bg-white flex justify-center items-center",
      "origin-right transition-[width,translate] duration-150",
    ],
  },
  variants: {
    color: {
      default: {
        root: "data-checked:bg-default data-checked:data-pressed:bg-default-active",
      },
      primary: {
        root: "data-checked:bg-primary data-checked:data-pressed:bg-primary-active",
      },
      secondary: {
        root: "data-checked:bg-secondary data-checked:data-pressed:bg-secondary-active",
      },
      success: {
        root: "data-checked:bg-success data-checked:data-pressed:bg-success-active",
      },
      warning: {
        root: "data-checked:bg-warning data-checked:data-pressed:bg-warning-active",
      },
      danger: {
        root: "data-checked:bg-danger data-checked:data-pressed:bg-danger-active",
      },
    },
    size: {
      sm: {
        root: "h-5 w-9",
        thumb:
          "size-3.5 data-checked:translate-x-3.5 group-data-pressed:w-4 data-checked:group-data-pressed:translate-x-3",
      },
      md: {
        root: "h-6 w-10",
        thumb:
          "size-4 data-checked:translate-x-4 group-data-pressed:w-5 data-checked:group-data-pressed:translate-x-3",
      },
      lg: {
        root: "h-7 w-12",
        thumb:
          "size-5 data-checked:translate-x-5 group-data-pressed:w-6 data-checked:group-data-pressed:translate-x-4",
      },
    },
    isInvalid: {
      true: {},
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type SwitchVariants = VariantProps<typeof switchStyles>;
export type SwitchSlots = keyof ReturnType<typeof switchStyles>;
