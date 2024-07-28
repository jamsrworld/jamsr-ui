import { colorVariants, tv, type VariantProps } from "@jamsr-ui/utils";

export const buttonVariant = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-medium",
    "tap-highlight-transparent",
    "subpixel-antialiased",
    // "overflow-hidden",
    "transition-transform",
    "disabled:opacity-50",
    "focus-visible:ring-2 focus-visible:ring-primary",
    "hover:opacity-90",
  ],
  variants: {
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    variant: {
      solid: "",
      outline: "border-2 bg-transparent",
      shadow: "",
      light: "hover:bg-action-hover",
      link: "",
    },
    fullWidth: {
      true: "w-full",
    },
    size: {
      xs: "rounded-md",
      sm: "h-8 min-w-16 gap-1 rounded-lg px-3 text-xs",
      md: "h-10 min-w-20 gap-2 rounded-xl px-4 text-sm",
      lg: "h-12 min-w-40 gap-2 rounded-2xl px-6 text-base font-medium",
    },
    rounded: {
      true: "rounded-full",
    },
    isIconOnly: {
      true: "!px-0",
    },
    disableAnimation: {
      true: "!transition-none",
      false: "data-[pressed=true]:scale-[0.97]",
    },
  },
  compoundVariants: [
    {
      disableAnimation: false,
      size: "lg",
      class: "data-[pressed=true]:scale-[0.98]",
    },
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: colorVariants.solid.default,
    },
    {
      variant: "solid",
      color: "primary",
      class: colorVariants.solid.primary,
    },
    {
      variant: "solid",
      color: "secondary",
      class: colorVariants.solid.secondary,
    },
    {
      variant: "solid",
      color: "success",
      class: colorVariants.solid.success,
    },
    {
      variant: "solid",
      color: "warning",
      class: colorVariants.solid.warning,
    },
    {
      variant: "solid",
      color: "danger",
      class: colorVariants.solid.danger,
    },
    // light / color
    {
      variant: "light",
      color: "default",
    },
    {
      variant: "light",
      color: "primary",
      class: "text-primary",
    },
    {
      variant: "light",
      color: "secondary",
      class: "text-secondary",
    },
    {
      variant: "light",
      color: "success",
      class: "text-success",
    },
    {
      variant: "light",
      color: "warning",
      class: "text-warning",
    },
    {
      variant: "light",
      color: "danger",
      class: "text-danger",
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: colorVariants.shadow.default,
    },
    {
      variant: "shadow",
      color: "primary",
      class: colorVariants.shadow.primary,
    },
    {
      variant: "shadow",
      color: "secondary",
      class: colorVariants.shadow.secondary,
    },
    {
      variant: "shadow",
      color: "success",
      class: colorVariants.shadow.success,
    },
    {
      variant: "shadow",
      color: "warning",
      class: colorVariants.shadow.warning,
    },
    {
      variant: "shadow",
      color: "danger",
      class: colorVariants.shadow.danger,
    },
    // outline / color
    {
      variant: "outline",
      color: "default",
      class: colorVariants.outline.default,
    },
    {
      variant: "outline",
      color: "primary",
      class: colorVariants.outline.primary,
    },
    {
      variant: "outline",
      color: "secondary",
      class: colorVariants.outline.secondary,
    },
    {
      variant: "outline",
      color: "success",
      class: colorVariants.outline.success,
    },
    {
      variant: "outline",
      color: "warning",
      class: colorVariants.outline.warning,
    },
    {
      variant: "outline",
      color: "danger",
      class: colorVariants.outline.danger,
    },
    // Icon Only
    {
      isIconOnly: true,
      size: "xs",
      class: "size-6",
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "size-8 min-w-8 ",
    },
    {
      isIconOnly: true,
      size: "md",
      class: "size-10 min-w-10",
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "size-12 min-w-12",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    disableAnimation: false,
  },
});

export const buttonGroup = tv({
  base: "inline-flex h-auto items-center justify-center",
  variants: {
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariant>;
export type ButtonGroupVariantProps = VariantProps<typeof buttonGroup>;
