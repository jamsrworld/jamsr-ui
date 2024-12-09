import { radiusVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const menuVariants = tv({
  slots: {
    arrow: "fill-content2",
    base: "inline-block transition-transform duration-300 ui-open:scale-95 ui-open:opacity-50",
    backdrop: "z-backdrop",
    popover:
      "z-popover box-border inline-flex min-w-[200px] flex-col justify-center bg-content1 p-1 text-sm shadow-md outline-none backdrop-blur-3xl",
    menuItem: [
      "relative box-border flex size-full cursor-pointer select-none items-center gap-2 px-2 py-1.5 text-left outline-none hover:bg-content2 focus:bg-content2 ui-disabled:pointer-events-none ui-disabled:opacity-50",
      "ui-active:bg-content3",
    ],
  },
  variants: {
    radius: radiusVariant(["popover", "menuItem"]),
    backdrop: {
      transparent: {},
      blur: {
        backdrop: "backdrop-blur-sm",
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
