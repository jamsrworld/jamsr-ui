import { tv } from "tailwind-variants";

export const avatarStyles = tv({
  slots: {
    root: "relative block cursor-default group shrink-0 rounded-full bg-surface object-cover [&>img]:size-full [&>img]:object-cover",
    img: "select-none group-data-[status=idle]:hidden group-data-[status=loading]:hidden rounded-inherit",
    fallback: "absolute inset-0 flex items-center justify-center font-medium",
    indicator:
      "absolute -bottom-2 -right-1 size-6 flex justify-center items-center",
  },
  variants: {
    size: {
      xs: { root: "size-6", fallback: "text-xs" },
      sm: { root: "size-8", fallback: "text-sm" },
      md: { root: "size-10", fallback: "text-base" },
      lg: { root: "size-12", fallback: "text-lg" },
      xl: { root: "size-16", fallback: "text-xl" },
    },
    color: {
      default: { root: "bg-default text-default-foreground ring-default" },
      primary: { root: "bg-primary text-primary-foreground ring-primary" },
      secondary: {
        root: "bg-secondary text-secondary-foreground ring-secondary",
      },
      success: { root: "bg-success text-success-foreground ring-success" },
      warning: { root: "bg-warning text-warning-foreground ring-warning" },
      danger: { root: "bg-danger text-danger-foreground ring-danger" },
    },
    isBordered: {
      true: { root: "ring-2" },
      false: { root: "border-transparent" },
    },
    radius: {
      none: { root: "rounded-none" },
      sm: { root: "rounded-sm" },
      md: { root: "rounded-md" },
      lg: { root: "rounded-lg" },
      full: { root: "rounded-full" },
    },
  },
  defaultVariants: {
    isBordered: false,
    size: "md",
    color: "default",
    radius: "full",
  },
});
