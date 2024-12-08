import type { ClassProp, VariantProps } from "@jamsr-ui/utils";
import { colorVariants, radiusBaseVariant, tv } from "@jamsr-ui/utils";

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
    "transition-transform",
    "focus-visible:ring-2 focus-visible:ring-primary",
    "ui-disabled:cursor-not-allowed ui-disabled:opacity-50",
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
    size: {
      xs: "size-6 rounded",
      sm: "size-8 min-w-8 rounded-lg",
      md: "size-10 min-w-10 rounded-xl",
      lg: "size-12 min-w-12 rounded-2xl",
    },
    isRounded: {
      true: "rounded-full",
    },
    disableAnimation: {
      true: "!transition-none",
      false: "data-[pressed=true]:scale-[0.97]",
    },
    radius: radiusBaseVariant,
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
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
export const iconButton = tv({
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
