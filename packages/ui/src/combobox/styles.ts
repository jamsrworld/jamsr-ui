import { tv } from "tailwind-variants";

import { focusWithinClasses } from "../utils";

import type { VariantProps } from "tailwind-variants";

export const comboboxStyles = tv({
  slots: {
    label: "text-sm font-medium text-foreground mb-1.5",
    inputGroup: [
      "flex items-center rounded-md border border-border bg-surface",
      "transition-colors",
      ...focusWithinClasses,
    ],
    input: [
      "flex-1 bg-transparent px-3 py-2 text-sm outline-none",
      "placeholder:text-foreground-tertiary",
      "disabled:cursor-not-allowed",
    ],
    trigger: [
      "inline-flex items-center justify-center px-2 text-foreground-secondary",
      "hover:text-foreground transition-colors",
      "disabled:status-disabled",
    ],
    clear: [
      "inline-flex items-center justify-center px-1 text-foreground-tertiary",
      "hover:text-foreground transition-colors",
    ],
    positioner: "z-popover outline-hidden",
    popup: [
      "relative z-popover box-border w-(--anchor-width) overflow-hidden rounded-md border border-border bg-surface shadow-lg",
      "origin-(--transform-origin) transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
    ],
    list: "max-h-60 overflow-auto p-1",
    item: [
      "relative flex cursor-interactive select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none",
      "data-highlighted:bg-surface-secondary",
      "data-disabled:status-disabled",
    ],
    itemIndicator: "grid size-4 shrink-0 place-content-center",
    empty: "py-6 text-center text-sm text-foreground-secondary empty:hidden",
    group: "",
    groupLabel: "px-2 py-1.5 text-xs font-medium text-foreground-secondary",
    separator: "mx-1 my-1 h-px bg-border",
    chip: [
      "inline-flex items-center gap-1 rounded-md border border-border bg-surface-secondary px-1.5 py-0.5 text-xs",
    ],
    chipRemove: [
      "inline-flex items-center justify-center rounded-full p-0.5 text-foreground-secondary",
      "hover:bg-surface-tertiary hover:text-foreground transition-colors",
    ],
    chips: "flex flex-wrap gap-1 px-2 py-1",
  },
});

export type ComboboxVariants = VariantProps<typeof comboboxStyles>;
