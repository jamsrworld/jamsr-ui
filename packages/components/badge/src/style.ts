import { tv, type VariantProps } from "@jamsr-ui/utils";

export const badgeVariants = tv({
  base: [
    "w-max",
    "rounded-lg",
    "text-xs",
    "font-semibold",
    "cursor-default",
    "capitalize",
    "py-0.5",
  ],
  variants: {
    color: {
      default: "bg-background-tertiary",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      danger: "bg-danger text-danger-foreground",
      warning: "bg-warning text-warning-foreground",
      success: "bg-success text-success-foreground",
    },
    size: {
      sm: "px-1",
      md: "px-2",
      lg: "px-3",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;
export type BadgeColors = NonNullable<BadgeVariants["color"]>;
