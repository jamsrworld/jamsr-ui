import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const cardVariants = tv({
  base: "relative overflow-hidden rounded-2xl transition-colors",
  variants: {
    bg: {
      default: "bg-content1",
      secondary: "bg-background-secondary",
      gradient:
        "border border-divider-light bg-[linear-gradient(139deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_30%,rgba(255,255,255,0.01)_66%,rgba(255,255,255,0.08))] ",
    },
    variant: {
      solid: "",
      outlined: "border",
      elevated: "shadow-sm",
    },
  },
  defaultVariants: {
    bg: "default",
    variant: "solid",
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
