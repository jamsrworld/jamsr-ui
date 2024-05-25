import { type VariantProps, tv } from "@jamsr-ui/utils";

export const avatarVariants = tv({
  base: [
    "flex-shrink-0",
    "bg-background",
    "overflow-hidden",
    "rounded-full",
    "border-2",
    "object-cover",
  ],
  variants: {
    size: {
      sm: "size-8",
      md: "size-10",
      lg: "size-12",
      xl: "size-16",
    },
    bordered: {
      true: "border-divider",
      false: "border-transparent",
    },
  },
  defaultVariants: {
    size: "md",
    bordered: false,
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
