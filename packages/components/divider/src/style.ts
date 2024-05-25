import { tv, type VariantProps } from "@jamsr-ui/utils";

export const dividerVariants = tv({
  slots: {
    base: "flex items-center",
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
        divider: "h-full w-px bg-gradient-to-b",
      },
      horizontal: {
        divider: "h-px w-full bg-gradient-to-r",
      },
    },
    absolute: {
      true: "absolute",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

export type DividerVariants = VariantProps<typeof dividerVariants>;
