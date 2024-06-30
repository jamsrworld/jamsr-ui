import { tv, type VariantProps } from "@jamsr-ui/utils";

export const cardVariants = tv({
  base: "relative overflow-hidden rounded-2xl bg-background-paper shadow-sm shadow-black/30",
  variants: {
    variant: {
      default: "",
      gradient:
        "border-[1.2px] border-black/10 bg-[linear-gradient(139deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_30%,rgba(255,255,255,0.01)_66%,rgba(255,255,255,0.08))] ",
    },
    bg: {
      default: "bg-background-paper",
      secondary: "",
    },
    bordered: {
      true: "",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      bordered: true,
      className: "border border-white/20",
    },
  ],
  defaultVariants: {
    variant: "default",
    bg: "default",
    bordered: true,
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
