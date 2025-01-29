import type { ClassProp, VariantProps } from "@jamsr-ui/utils";
import { colorVariants, tv } from "@jamsr-ui/utils";

const baseVariant = tv({
  base: [
    "z-0",
    "cursor-pointer",
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
    "transition-transform",
    "focus-visible:ring-2 focus-visible:ring-primary",
    "ui-disabled:cursor-not-allowed ui-disabled:opacity-60",
    "text-transform-inherit",
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
      light: "",
      text: "",
      flat: "",
    },
    fullWidth: {
      true: "w-full",
    },
    size: {
      xs: "px-2 py-1 text-2xs",
      sm: "min-w-16 gap-1 px-3 py-1.5 text-xs",
      md: "min-w-20 gap-2 px-4 py-2 text-sm",
      lg: "min-w-40 gap-2 px-6 py-2.5 text-base font-medium",
    },
    radius: {
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
      none: "rounded-none",
    },
    disableAnimation: {
      true: "!transition-none",
      false: "ui-pressed:scale-[0.97]",
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
    disableAnimation: false,
  },
  compoundVariants: [
    {
      disableAnimation: false,
      size: "lg",
      className: "ui-pressed:scale-[0.98]",
    },
  ],
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

const textVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "text",
    color: "default",
    className: colorVariants.text.default,
  },
  {
    variant: "text",
    color: "primary",
    className: colorVariants.text.primary,
  },
  {
    variant: "text",
    color: "secondary",
    className: colorVariants.text.secondary,
  },
  {
    variant: "text",
    color: "success",
    className: colorVariants.text.success,
  },
  {
    variant: "text",
    color: "warning",
    className: colorVariants.text.warning,
  },
  {
    variant: "text",
    color: "danger",
    className: colorVariants.text.danger,
  },
];

const flatVariant: CompoundVariant<ButtonVariantProps>[] = [
  {
    variant: "flat",
    color: "default",
    className: colorVariants.flat.default,
  },
  {
    variant: "flat",
    color: "primary",
    className: colorVariants.flat.primary,
  },
  {
    variant: "flat",
    color: "secondary",
    className: colorVariants.flat.secondary,
  },
  {
    variant: "flat",
    color: "success",
    className: colorVariants.flat.success,
  },
  {
    variant: "flat",
    color: "warning",
    className: colorVariants.flat.warning,
  },
  {
    variant: "flat",
    color: "danger",
    className: colorVariants.flat.danger,
  },
];

export const test = "";
export const button = tv({
  extend: baseVariant,
  compoundVariants: [
    ...solidVariant,
    ...lightVariant,
    ...outlinedVariant,
    ...textVariant,
    ...flatVariant,
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
