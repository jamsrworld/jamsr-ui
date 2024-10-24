import { tv } from "@jamsr-ui/utils";

export const menuVariants = tv({
  slots: {
    menu: "drop-shadow-menu z-popover box-border inline-flex min-w-[200px] flex-col justify-center rounded-2xl bg-background p-1 text-sm subpixel-antialiased shadow-card outline-none backdrop-blur-3xl",
    menuItem:
      "relative box-border flex size-full cursor-pointer select-none items-center gap-2 rounded-xl px-2 py-1.5 subpixel-antialiased outline-none focus:bg-content2 disabled:pointer-events-none disabled:opacity-50",
  },
  variants: {
    opened: {
      true: {
        menuItem: "bg-content2",
      },
    },
  },
});
