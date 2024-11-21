import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const menuVariants = tv({
  slots: {
    arrow: "fill-content2",
    base: "inline-block",
    backdrop: "z-backdrop",
    popover:
      "z-popover box-border inline-flex min-w-[200px] flex-col justify-center rounded-2xl bg-content1 p-1 text-sm subpixel-antialiased shadow-md outline-none backdrop-blur-3xl",
    menuItem: [
      "relative box-border flex size-full cursor-pointer select-none items-center gap-2 rounded-xl px-2 py-1.5 text-left subpixel-antialiased outline-none hover:bg-content2 focus:bg-content2 ui-disabled:pointer-events-none ui-disabled:opacity-50",
      "ui-active:bg-content3",
    ],
  },
  variants: {
    backdrop: {
      default: {},
      blur: {
        backdrop: "backdrop-blur-sm",
      },
    },
  },
  defaultVariants: {
    backdrop: "default",
  },
});

export type MenuVariantProps = VariantProps<typeof menuVariants>;
export type MenuSlots = keyof ReturnType<typeof menuVariants>;
