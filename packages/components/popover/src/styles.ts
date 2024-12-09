import { radiusVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const popover = tv({
  slots: {
    base: "z-popover rounded-2xl bg-content1 p-2 text-sm shadow-md backdrop-blur-3xl focus:outline-none",
    arrow: "fill-content1",
  },
  variants: {
    radius: radiusVariant("base"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type PopoverVariantProps = VariantProps<typeof popover>;
export type PopoverSlots = keyof ReturnType<typeof popover>;
