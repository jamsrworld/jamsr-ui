import { tv } from "@jamsr-ui/utils";

export const menuVariants = tv({
  slots: {
    menu: "z-popover box-border inline-flex min-w-[200px] flex-col justify-center rounded-2xl border border-divider bg-background p-1 text-sm subpixel-antialiased shadow-card outline-none",
    menuItem:
      "relative box-border flex size-full select-none items-center gap-2 rounded-xl px-2 py-1.5 subpixel-antialiased outline-none focus:bg-action-hover enabled:cursor-pointer enabled:hover:bg-action-hover disabled:opacity-50",
  },
  variants: {
    opened: {
      true: {
        menuItem: "bg-action-hover",
      },
    },
  },
});
