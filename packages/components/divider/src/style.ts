import { tv, type VariantProps } from "@jamsr-ui/utils";

export const dividerVariants = tv({
  slots: {
    base: "flex items-center gap-2",
    divider: "",
  },
  variants: {
    variant: {
      default: {
        divider: "bg-divider",
      },
      gradient: {
        divider: "from-transparent via-[#989AA6]/[0.5] to-transparent",
      },
    },
    orientation: {
      vertical: {
        base: "flex-col",
        divider: "h-full w-px",
      },
      horizontal: {
        divider: "h-px w-full",
      },
    },
    color: {
      light: { divider: "bg-divider-light" },
      dark: { divider: "bg-divider-dark" },
      default: { divider: "bg-divider" },
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      variant: "gradient",
      className: {
        divider: "bg-gradient-to-r",
      },
    },
    {
      orientation: "vertical",
      variant: "gradient",
      className: {
        divider: "bg-gradient-to-b",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
    color: "default",
  },
});

export type DividerVariants = VariantProps<typeof dividerVariants>;
export type DividerSlots = keyof ReturnType<typeof dividerVariants>;
