import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const commandStyles = tv({
  slots: {
    root: [
      "flex w-full flex-col overflow-hidden rounded-lg border border-border bg-surface text-foreground",
    ],
    input: [
      "flex h-10 w-full bg-transparent px-3 py-2 text-sm outline-none",
      "placeholder:text-foreground-secondary",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    inputWrapper: [
      "flex items-center gap-2 border-b border-border px-3",
      "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-foreground-secondary",
    ],
    list: [
      "max-h-75 overflow-y-auto overflow-x-hidden p-1",
      "**:[[cmdk-list-sizer]]:space-y-1",
    ],
    empty: "py-6 text-center text-sm text-foreground-secondary",
    group:
      "**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-foreground-secondary",
    separator: "mx-1 my-1 h-px bg-border",
    item: [
      "relative flex cursor-interactive select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none",
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      "data-[selected=true]:bg-surface-secondary data-[selected=true]:text-foreground",
      "[&_svg]:size-4 [&_svg]:shrink-0",
    ],
    shortcut: "ml-auto text-xs tracking-widest text-foreground-secondary",
    dialogOverlay: [
      "fixed inset-0 z-backdrop bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    ],
    dialogContent: [
      "fixed left-1/2 top-1/2 z-dialog -translate-x-1/2 -translate-y-1/2",
      "w-full max-w-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    ],
    loading: "py-6 text-center text-sm text-foreground-secondary",
  },
});

export type CommandVariants = VariantProps<typeof commandStyles>;
