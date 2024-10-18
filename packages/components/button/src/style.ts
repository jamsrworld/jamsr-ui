import type { ClassProp, VariantProps } from "@jamsr-ui/utils";
import { colorVariants, tv } from "@jamsr-ui/utils";

const baseVariant = tv({
  base: [
    "z-0",
    "shrink-0",
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
      outlined: "border-2 bg-transparent",
      shadow: "",
      light: "",
      link: "!min-w-0 !p-0",
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
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    disableAnimation: false,
  },
});

type CompoundVariant<T> = T & ClassProp;

const solidVariant: CompoundVariant<ButtonVariantProps>[] = [
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
];

const lightVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "light",
    color: "default",
    class: [colorVariants.light.default, "data-[hover=true]:bg-default/20"],
  },
  {
    variant: "light",
    color: "primary",
    class: [colorVariants.light.primary, "data-[hover=true]:bg-primary/20"],
  },
  {
    variant: "light",
    color: "secondary",
    class: [colorVariants.light.secondary, "data-[hover=true]:bg-secondary/20"],
  },
  {
    variant: "light",
    color: "success",
    class: [colorVariants.light.success, "data-[hover=true]:bg-success/20"],
  },
  {
    variant: "light",
    color: "warning",
    class: [colorVariants.light.warning, "data-[hover=true]:bg-warning/20"],
  },
  {
    variant: "light",
    color: "danger",
    class: [colorVariants.light.danger, "data-[hover=true]:bg-danger/20"],
  },
];

const shadowVariant: CompoundVariant<ButtonVariantProps>[] = [
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
];

const outlinedVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "outlined",
    color: "default",
    class: colorVariants.outlined.default,
  },
  {
    variant: "outlined",
    color: "primary",
    class: colorVariants.outlined.primary,
  },
  {
    variant: "outlined",
    color: "secondary",
    class: colorVariants.outlined.secondary,
  },
  {
    variant: "outlined",
    color: "success",
    class: colorVariants.outlined.success,
  },
  {
    variant: "outlined",
    color: "warning",
    class: colorVariants.outlined.warning,
  },
  {
    variant: "outlined",
    color: "danger",
    class: colorVariants.outlined.danger,
  },
];

const iconOnlyVariant: CompoundVariant<ButtonVariantProps>[] = [
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
];

const linkVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "link",
    color: "default",
    class: colorVariants.link.default,
  },
  {
    variant: "link",
    color: "primary",
    class: colorVariants.link.primary,
  },
  {
    variant: "link",
    color: "secondary",
    class: colorVariants.link.secondary,
  },
  {
    variant: "link",
    color: "success",
    class: colorVariants.link.success,
  },
  {
    variant: "link",
    color: "warning",
    class: colorVariants.link.warning,
  },
  {
    variant: "link",
    color: "danger",
    class: colorVariants.link.danger,
  },
];

export const buttonVariant = tv({
  extend: baseVariant,
  compoundVariants: [
    {
      disableAnimation: false,
      size: "lg",
      class: "data-[pressed=true]:scale-[0.98]",
    },
    {
      variant: "link",
      className: "hover:opacity-70",
    },
    ...solidVariant,
    ...lightVariant,
    ...shadowVariant,
    ...outlinedVariant,
    ...linkVariant,
    ...iconOnlyVariant,
  ],
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

export type ButtonVariantProps = VariantProps<typeof baseVariant>;
export type ButtonGroupVariantProps = VariantProps<typeof buttonGroup>;
