import { focusVisibleClasses, tv, type VariantProps } from "@jamsr-ui/utils";

export const link = tv({
  base: [
    "cursor-pointer select-none text-foreground-link",
    focusVisibleClasses,
  ],
  variants: {
    underline: {
      hover: "hover:underline hover:underline-offset-4",
      never: "",
      always: "underline underline-offset-4",
    },
  },
  defaultVariants: {
    underline: "hover",
  },
});

export type LinkVariants = VariantProps<typeof link>;
