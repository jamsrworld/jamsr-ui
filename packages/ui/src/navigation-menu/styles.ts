import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const navigationMenuStyles = tv({
  slots: {
    root: "relative",
    list: "flex list-none items-center gap-1 p-1",
    item: "",
    trigger: [
      "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium",
      "text-foreground-secondary transition-colors",
      "hover:bg-surface-secondary hover:text-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "data-popup-open:bg-surface-secondary data-popup-open:text-foreground",
    ],
    icon: [
      "relative top-px size-3 transition-transform duration-200",
      "group-data-popup-open:rotate-180",
    ],
    content: "w-full p-4",
    link: [
      "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium",
      "text-foreground-secondary transition-colors",
      "hover:bg-surface-secondary hover:text-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    ],
    backdrop: [
      "z-backdrop fixed inset-0",
      "transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0",
    ],
    positioner: "z-popover outline-hidden",
    popup: [
      "relative z-popover overflow-hidden rounded-lg border border-border bg-surface shadow-lg",
      "origin-(--transform-origin) transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
    ],
    viewport: "",
    arrow: [
      "text-surface",
      "data-[side=bottom]:-top-2 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
    ],
    linkCard: [
      "block select-none rounded-md p-3 no-underline outline-none transition-colors",
      "hover:bg-surface-secondary focus:bg-surface-secondary",
    ],
    linkTitle: "mb-1 text-sm font-medium leading-none text-foreground",
    linkDescription: "text-sm leading-snug text-foreground-secondary",
  },
});

export type NavigationMenuVariants = VariantProps<typeof navigationMenuStyles>;
