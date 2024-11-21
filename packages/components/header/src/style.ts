import { tv, type VariantProps } from "@jamsr-ui/utils";

export const header = tv({
  base: "inset-x-0 top-0 z-header flex h-16 w-full shrink-0 items-center bg-background",
  variants: {
    blur: {
      true: "bg-background/30 backdrop-blur backdrop-saturate-150",
    },
    position: {
      static: "static",
      sticky: "sticky",
    },
  },
  defaultVariants: {
    blur: true,
    position: "sticky",
  },
});

export type HeaderVariantProps = VariantProps<typeof header>;
