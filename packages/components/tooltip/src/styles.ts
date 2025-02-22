import { radiusVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const tooltip = tv({
  slots: {
    content: "z-popover inline-block rounded-lg bg-content1 px-3 py-1 text-sm font-medium text-foreground shadow-sm transition-opacity duration-300",
    arrow: "fill-content1",
  },
  variants: {
    radius: radiusVariant("base"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type TooltipVariantProps = VariantProps<typeof tooltip>;
export type TooltipSlots = keyof ReturnType<typeof tooltip>;
