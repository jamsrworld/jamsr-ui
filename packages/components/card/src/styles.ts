import { radiusBaseVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const cardVariants = tv({
  base: "relative overflow-hidden transition-colors",
  variants: {
    bg: {
      default: "bg-content1",
      secondary: "bg-background-secondary",
      gradient:
        "border border-divider-light bg-[linear-gradient(139deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_30%,rgba(255,255,255,0.01)_66%,rgba(255,255,255,0.08))] ",
    },
    variant: {
      solid: "",
      outlined: "border border-divider-dark",
      elevated: "shadow-sm",
    },
    radius: radiusBaseVariant,
  },
  defaultVariants: {
    bg: "default",
    variant: "solid",
    radius: "md",
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;