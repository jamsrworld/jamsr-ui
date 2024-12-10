import { radiusVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const menuVariants = tv({
  slots: {
    arrow: "fill-content2",
    base: "inline-block transition-transform duration-300 ui-open:scale-95 ui-open:opacity-50",
    backdrop: "z-backdrop",
    popover:
      "z-popover box-border inline-flex min-w-[150px] flex-col justify-center bg-content1 p-1 text-sm shadow-md outline-none",
    menuItem: [
      "relative box-border flex size-full cursor-pointer select-none items-center gap-2 px-2 py-1.5 text-left outline-none focus:bg-content2 ui-hover:bg-content2 ui-disabled:cursor-not-allowed ui-disabled:opacity-60",
      "ui-active:bg-content3",
    ],
  },
  variants: {
    radius: radiusVariant(["popover", "menuItem"]),
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-overlay/50",
      },
      blur: {
        backdrop: "bg-overlay/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
    color: {
      default: {
        menuItem: "ui-hover:bg-content2 ui-hover:text-foreground",
      },
      primary: {
        menuItem:
          "ui-hover:bg-primary-700 ui-hover:text-primary-foreground dark:ui-hover:bg-primary-300 ",
      },
      secondary: {
        menuItem:
          "ui-hover:bg-secondary-600 ui-hover:text-secondary-foreground dark:ui-hover:bg-secondary-300 ",
      },
      success: {
        menuItem:
          "ui-hover:bg-success-600 ui-hover:text-success-foreground dark:ui-hover:bg-success-300 ",
      },
      warning: {
        menuItem:
          "ui-hover:bg-warning-600 ui-hover:text-warning-foreground dark:ui-hover:bg-warning-300 ",
      },
      danger: {
        menuItem:
          "ui-hover:bg-danger-600 ui-hover:text-danger-foreground dark:ui-hover:bg-danger-300",
      },
    },
  },
  defaultVariants: {
    backdrop: "transparent",
    radius: "md",
  },
});

export type MenuVariantProps = VariantProps<typeof menuVariants>;
export type MenuSlots = keyof ReturnType<typeof menuVariants>;
