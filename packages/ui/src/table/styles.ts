import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const tableStyles = tv({
  slots: {
    root: "group/table w-full min-w-full rounded-2xl overflow-hidden",
    thead: "h-10 group/thead",
    th: [
      "h-10 grow items-center px-3 text-left text-sm font-normal",
      "data-pinned:bg-background/90 data-pinned:backdrop-blur-xl",
      "group/th",
    ],
    tbody: "",
    tr: "group/tr",
    td: [
      "overflow-hidden  px-3 text-sm",
      "data-pinned:bg-background/90 data-pinned:backdrop-blur-xl",
    ],
    tfoot: "",
  },
  variants: {
    variant: {
      solid: {
        th: "bg-surface-secondary first:rounded-l-lg last:rounded-r-lg",
        root: "bg-surface p-4",
      },
      bordered: {
        th: "border-b border-b-border-dark bg-surface-secondary text-foreground-secondary font-normal text-xs",
        td: "border-b border-border-light",
        root: "bg-surface",
      },
    },
    radius: {
      none: { root: "rounded-none" },
      sm: { root: "rounded-sm" },
      md: { root: "rounded-md" },
      lg: { root: "rounded-lg" },
      full: { root: "rounded-full" },
    },
    density: {
      compact: {
        td: "py-2",
      },
      standard: {
        td: "py-4",
      },
      comfortable: {
        td: "py-6",
      },
    },
    isHeaderSticky: {
      true: {
        thead: "sticky top-0 z-10 [&>tr]:shadow-sm",
        wrapper: "flex max-h-100 flex-col overflow-auto",
        th: " bg-surface-secondary/90 backdrop-blur-xl",
      },
    },
    allowHover: {
      true: {
        td: "md:group-hover/tr:bg-surface-secondary",
      },
      false: {
        td: "",
      },
    },
    separateRows: {
      true: {
        tr: "border-b-2 border-transparent",
        td: "border-none bg-surface",
        root: "border-none bg-transparent p-0",
      },
    },
  },
  defaultVariants: {
    isHeaderSticky: false,
    density: "compact",
    allowHover: false,
    separateRows: false,
    variant: "bordered",
    radius: "md",
  },
});

export type TableVariants = VariantProps<typeof tableStyles>;
export type TableSlots = keyof ReturnType<typeof tableStyles>;
