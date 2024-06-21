import { tv, type VariantProps } from "@jamsr-ui/utils";

export const header = tv({
  base: "sticky inset-x-0 top-0 z-header flex h-16 w-full bg-background",
  variants: {
    blur: {
      true: "bg-background/30 backdrop-blur backdrop-saturate-150",
    },
  },
  defaultVariants: {
    blur: true,
  },
});

export type HeaderVariantProps = VariantProps<typeof header>;
