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
    className: colorVariants.solid.default,
  },
  {
    variant: "solid",
    color: "primary",
    className: colorVariants.solid.primary,
  },
  {
    variant: "solid",
    color: "secondary",
    className: colorVariants.solid.secondary,
  },
  {
    variant: "solid",
    color: "success",
    className: colorVariants.solid.success,
  },
  {
    variant: "solid",
    color: "warning",
    className: colorVariants.solid.warning,
  },
  {
    variant: "solid",
    color: "danger",
    className: colorVariants.solid.danger,
  },
];

const lightVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "light",
    color: "default",
    className: colorVariants.light.default,
  },
  {
    variant: "light",
    color: "primary",
    className: colorVariants.light.primary,
  },
  {
    variant: "light",
    color: "secondary",
    className: colorVariants.light.secondary,
  },
  {
    variant: "light",
    color: "success",
    className: colorVariants.light.success,
  },
  {
    variant: "light",
    color: "warning",
    className: colorVariants.light.warning,
  },
  {
    variant: "light",
    color: "danger",
    className: colorVariants.light.danger,
  },
];

const shadowVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "shadow",
    color: "default",
    className: colorVariants.shadow.default,
  },
  {
    variant: "shadow",
    color: "primary",
    className: colorVariants.shadow.primary,
  },
  {
    variant: "shadow",
    color: "secondary",
    className: colorVariants.shadow.secondary,
  },
  {
    variant: "shadow",
    color: "success",
    className: colorVariants.shadow.success,
  },
  {
    variant: "shadow",
    color: "warning",
    className: colorVariants.shadow.warning,
  },
  {
    variant: "shadow",
    color: "danger",
    className: colorVariants.shadow.danger,
  },
];

const outlinedVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "outlined",
    color: "default",
    className: colorVariants.outlined.default,
  },
  {
    variant: "outlined",
    color: "primary",
    className: colorVariants.outlined.primary,
  },
  {
    variant: "outlined",
    color: "secondary",
    className: colorVariants.outlined.secondary,
  },
  {
    variant: "outlined",
    color: "success",
    className: colorVariants.outlined.success,
  },
  {
    variant: "outlined",
    color: "warning",
    className: colorVariants.outlined.warning,
  },
  {
    variant: "outlined",
    color: "danger",
    className: colorVariants.outlined.danger,
  },
];

const iconOnlyVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    isIconOnly: true,
    size: "xs",
    className: "size-6",
  },
  {
    isIconOnly: true,
    size: "sm",
    className: "size-8 min-w-8 ",
  },
  {
    isIconOnly: true,
    size: "md",
    className: "size-10 min-w-10",
  },
  {
    isIconOnly: true,
    size: "lg",
    className: "size-12 min-w-12",
  },
];

const linkVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "link",
    color: "default",
    className: colorVariants.link.default,
  },
  {
    variant: "link",
    color: "primary",
    className: colorVariants.link.primary,
  },
  {
    variant: "link",
    color: "secondary",
    className: colorVariants.link.secondary,
  },
  {
    variant: "link",
    color: "success",
    className: colorVariants.link.success,
  },
  {
    variant: "link",
    color: "warning",
    className: colorVariants.link.warning,
  },
  {
    variant: "link",
    color: "danger",
    className: colorVariants.link.danger,
  },
];

export const buttonVariant = tv({
  extend: baseVariant,
  compoundVariants: [
    {
      disableAnimation: false,
      size: "lg",
      className: "data-[pressed=true]:scale-[0.98]",
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
