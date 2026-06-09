import { tv } from "tailwind-variants";

export const menuStyles = tv({
  slots: {
    arrow: [
      "text-surface",
      "data-[side=bottom]:-top-2 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
    ],
    backdrop: [
      "z-backdrop fixed inset-0 min-h-dvh",
      "transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute",
    ],
    positioner: "z-popover outline-hidden",
    popup: [
      "relative z-popover box-border inline-flex w-full flex-col justify-center bg-surface p-1 text-sm shadow-md",
      "shadow-lg outline-hidden",
      "origin-(--transform-origin) transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0",
    ],
    menuItem: [
      "relative box-border flex size-full select-none items-center gap-2 px-2 py-1.5 text-left outline-none data-disabled:status-disabled",
      "data-active:bg-surface-secondary",
    ],
    menuGroup: [""],
    menuGroupLabel: "pl-2 text-foreground-secondary py-1",
    submenuIndicator: "ml-auto size-4",
    menuItemIndicator: "size-4 grid place-content-center",
  },
  variants: {
    radius: {
      none: { popup: "rounded-none", menuItem: "rounded-none" },
      sm: { popup: "rounded-sm", menuItem: "rounded-sm" },
      md: { popup: "rounded-md", menuItem: "rounded-md" },
      lg: { popup: "rounded-lg", menuItem: "rounded-lg" },
    },
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-black/50",
      },
      blur: {
        backdrop: "bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
    color: {
      default: {
        menuItem:
          "data-highlighted:bg-surface-secondary data-highlighted:text-foreground",
      },
      primary: {
        menuItem:
          "data-highlighted:bg-primary data-highlighted:text-primary-foreground",
      },
      secondary: {
        menuItem:
          "data-highlighted:bg-secondary data-highlighted:text-secondary-foreground",
      },
      success: {
        menuItem:
          "data-highlighted:bg-success data-highlighted:text-success-foreground",
      },
      warning: {
        menuItem:
          "data-highlighted:bg-warning data-highlighted:text-warning-foreground",
      },
      danger: {
        menuItem:
          "data-highlighted:bg-danger data-highlighted:text-danger-foreground",
      },
    },
  },
  defaultVariants: {
    backdrop: "transparent",
    radius: "md",
    color: "default",
  },
});
