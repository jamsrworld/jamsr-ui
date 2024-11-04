import { tv, type VariantProps } from "@jamsr-ui/utils";

export const cardVariants = tv({
  base: "relative overflow-hidden rounded-2xl bg-background-secondary transition-colors",
  variants: {
    bg: {
      default: "bg-content1",
      secondary: "bg-background-secondary",
      gradient:
        "border border-divider-light bg-[linear-gradient(139deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_30%,rgba(255,255,255,0.01)_66%,rgba(255,255,255,0.08))] ",
    },
  },
  defaultVariants: {
    bg: "default",
    bordered: true,
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
