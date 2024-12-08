import { type VariantProps, radiusBaseVariant, tv } from "@jamsr-ui/utils";

export const test = "";
export const avatarVariants = tv({
  base: "flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-content1 object-cover",
  variants: {
    size: {
      xs: "size-6",
      sm: "size-8",
      md: "size-10",
      lg: "size-12",
      xl: "size-16",
    },
    color: {
      default: "bg-default text-default-foreground ring-default",
      primary: "bg-primary text-primary-foreground ring-primary",
      secondary: "bg-secondary text-secondary-foreground ring-secondary",
      success: "bg-success text-success-foreground ring-success",
      warning: "bg-warning text-warning-foreground ring-warning",
      danger: "bg-danger text-danger-foreground ring-danger",
    },
    isBordered: {
      true: "ring-2",
      false: "border-transparent",
    },
    radius: radiusBaseVariant,
  },
  defaultVariants: {
    bordered: false,
    size: "md",
    color: "default",
    radius: "full",
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
