import { tv } from "tailwind-variants";

import { focusRingClasses } from "../utils";

import type { VariantProps } from "tailwind-variants";

export const autocompleteStyles = tv({
  slots: {
    input: [
      "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none",
      "placeholder:text-foreground-tertiary",
      "disabled:status-disabled",
      ...focusRingClasses,
    ],
    inputGroup: [
      "flex items-center rounded-md border border-border bg-surface",
      ...focusRingClasses,
    ],
    trigger: [
      "inline-flex items-center justify-center px-2 text-foreground-secondary",
      "hover:text-foreground transition-colors",
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
    empty: "py-6 text-center text-sm text-foreground-secondary empty:hidden",
    group: "",
    groupLabel: "px-2 py-1.5 text-xs font-medium text-foreground-secondary",
    separator: "mx-1 my-1 h-px bg-border",
  },
});

export type AutocompleteVariants = VariantProps<typeof autocompleteStyles>;
