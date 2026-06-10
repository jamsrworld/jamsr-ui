import { tv } from "tailwind-variants";

import { focusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const scrollbarStyles = tv({
  base: "m-1 flex rounded-sm bg-zinc-800 opacity-0 transition-opacity pointer-events-none data-hovering:opacity-100 data-hovering:delay-0 data-hovering:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0 data-scrolling:pointer-events-auto",
  variants: {
    orientation: {
      vertical: "w-1",
      horizontal: "h-1",
    },
    isScrollable: {
      false: "opacity-0 pointer-events-none",
    },
  },
  defaultVariants: {
    isScrollable: true,
    orientation: "vertical",
  },
});

export const scrollAreaStyles = tv({
  slots: {
    root: "",
    viewport: ["h-full rounded-md", focusVisibleClasses],
    thumb: "w-full rounded-sm bg-zinc-700",
    corner: "bg-surface/20",
    content: "",
  },
});

export type ScrollAreaVariants = VariantProps<typeof scrollAreaStyles>;
