import {
  type ClassValue,
  colorVariants,
  tv,
  type VariantProps,
} from "@jamsr-ui/utils";

export const test = "";

const base = tv({
  slots: {
    base: "relative box-border inline-flex min-w-min max-w-fit shrink-0 items-center justify-between whitespace-nowrap rounded-full",
    content: "flex-1 font-normal text-inherit",
    closeButton:
      "z-10 cursor-pointer select-none appearance-none opacity-70 outline-none transition-opacity tap-highlight-transparent hover:opacity-100 active:opacity-disabled",
  },
  variants: {
    variant: {
      solid: "",
      outlined: "border",
      flat: "",
    },
    size: {
      sm: {
        base: "h-6 px-1 text-xs",
        content: "px-1",
      },
      md: {
        base: "h-7 px-1 text-sm",
        content: "px-1",
      },
      lg: {
        base: "h-8 px-2 text-base",
        content: "px-2",
      },
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    isSquare: {
      true: {
        base: "flex aspect-square items-center justify-center",
        content: "flex-none",
      },
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
    variant: "solid",
  },
});
export type ChipVariantsProps = VariantProps<typeof base>;
export type ChipSlots = keyof ReturnType<typeof base>;

type CompoundVariant<T> = T & {
  className?: {
    [K in ChipSlots]?: ClassValue;
  };
};

const solidVariant: CompoundVariant<ChipVariantsProps>[] = [
  {
    variant: "solid",
    color: "default",
    className: {
      base: colorVariants.solid.default,
    },
  },
  {
    variant: "solid",
    color: "primary",
    className: { base: colorVariants.solid.primary },
  },
  {
    variant: "solid",
    color: "secondary",
    className: { base: colorVariants.solid.secondary },
  },
  {
    variant: "solid",
    color: "success",
    className: { base: colorVariants.solid.success },
  },
  {
    variant: "solid",
    color: "warning",
    className: { base: colorVariants.solid.warning },
  },
  {
    variant: "solid",
    color: "danger",
    className: { base: colorVariants.solid.danger },
  },
];

const outlinedVariant: CompoundVariant<ChipVariantsProps>[] = [
  {
    variant: "outlined",
    color: "default",
    className: { base: colorVariants.outlined.default },
  },
  {
    variant: "outlined",
    color: "primary",
    className: { base: colorVariants.outlined.primary },
  },
  {
    variant: "outlined",
    color: "secondary",
    className: { base: colorVariants.outlined.secondary },
  },
  {
    variant: "outlined",
    color: "success",
    className: { base: colorVariants.outlined.success },
  },
  {
    variant: "outlined",
    color: "warning",
    className: { base: colorVariants.outlined.warning },
  },
  {
    variant: "outlined",
    color: "danger",
    className: { base: colorVariants.outlined.danger },
  },
];

const flatVariant: CompoundVariant<ChipVariantsProps>[] = [
  {
    variant: "flat",
    color: "default",
    className: { base: colorVariants.flat.default },
  },
  {
    variant: "flat",
    color: "primary",
    className: { base: colorVariants.flat.primary },
  },
  {
    variant: "flat",
    color: "secondary",
    className: { base: colorVariants.flat.secondary },
  },
  {
    variant: "flat",
    color: "success",
    className: { base: colorVariants.flat.success },
  },
  {
    variant: "flat",
    color: "warning",
    className: { base: colorVariants.flat.warning },
  },
  {
    variant: "flat",
    color: "danger",
    className: { base: colorVariants.flat.danger },
  },
];

export const chip = tv({
  extend: base,
  compoundVariants: [...solidVariant, ...outlinedVariant, ...flatVariant],
});
