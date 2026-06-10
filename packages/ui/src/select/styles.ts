import { tv } from "tailwind-variants";

import { focusRingClasses, focusVisibleClasses } from "../utils/variants";

export const selectStyles = tv({
  slots: {
    value: [
      "text-sm",
      "font-normal overflow-hidden text-ellipsis grow text-start",
      "data-placeholder:text-foreground-secondary",
    ],
    trigger: [
      "relative flex w-full flex-row items-center gap-3 px-3 py-2 outline-none",
      "data-disabled:status-disabled",
    ],
    icon: "shrink-0 transition-transform duration-300 group-data-popup-open:rotate-180",
    positioner: "z-popover outline-hidden select-none",
    list: [
      "relative overflow-y-auto py-1 px-1 scroll-py-6",
      "max-h-(--available-height)",
    ],
    selectItem: [
      "relative flex w-full cursor-default select-none items-center gap-2 p-2 text-sm outline-none",
      "data-disabled:status-disabled data-highlighted:bg-surface-secondary data-selected:bg-surface-secondary/50",
      "flex flex-row",
    ],
    itemIndicator: "size-3",
    itemText: "",
    scrollUpArrow: "",
    scrollDownArrow: "",
    popup: [
      "group min-w-(--anchor-width) origin-(--transform-origin) bg-clip-padding bg-surface outline-hidden",
      "transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-[side=none]:min-w-[calc(var(--anchor-width)+1.3rem)] data-[side=none]:data-ending-style:transition-none data-starting-style:scale-90 data-starting-style:opacity-0 data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-starting-style:transition-none",
    ],
  },
  variants: {
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    radius: {
      none: {
        trigger: "rounded-none",
        popup: "rounded-none",
        selectItem: "rounded-none",
      },
      sm: {
        trigger: "rounded-sm",
        popup: "rounded-sm",
        selectItem: "rounded-sm",
      },
      md: {
        trigger: "rounded-md",
        popup: "rounded-md",
        selectItem: "rounded-md",
      },
      lg: {
        trigger: "rounded-lg",
        popup: "rounded-lg",
        selectItem: "rounded-lg",
      },
      full: {
        trigger: "rounded-full",
        popup: "rounded-2xl",
        selectItem: "rounded-full",
      },
    },
    size: {
      sm: {
        trigger: "h-8.5 min-h-8.5 px-2.5",
        value: "text-sm",
      },
      md: {
        trigger: "h-9.5 min-h-9.5 px-2.5",
        value: "text-sm",
      },
      lg: {
        trigger: "h-10.5 min-h-10.5 px-2.5",
        value: "text-base",
      },
    },
    variant: {
      bordered: {
        trigger: [
          "border border-border",
          "focus:border-primary focus:data-invalid:border-danger",
          "data-hovered:not-focus:border-border-dark data-popup-open:border-primary data-popup-open:data-invalid:border-danger",
        ],
      },
      solid: {
        trigger: ["bg-surface", ...focusVisibleClasses, ...focusRingClasses],
      },
    },
  },
  defaultVariants: {
    size: "md",
    radius: "md",
    variant: "solid",
  },
});
