import { type VariantProps, tv } from "@jamsr-ui/utils";

export const test = "";
export const avatarVariants = tv({
  base: ["flex-shrink-0", "bg-content1", "overflow-hidden", "object-cover"],
  variants: {
    size: {
      xs: "size-6",
      sm: "size-8",
      md: "size-10",
      lg: "size-12",
      xl: "size-16",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    isBordered: {
      true: "ring-divider ring-offset-2 ring-offset-divider",
      false: "border-transparent",
    },
  },
  defaultVariants: {
    bordered: false,
    size: "md",
    radius: "full",
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
