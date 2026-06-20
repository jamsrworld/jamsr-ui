import { tv } from "tailwind-variants";

type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type Variant = "solid" | "bordered" | "text" | "light" | "soft";

const solidClasses = {
  default:
    "bg-default border-default text-default-foreground data-hovered:bg-default-hover data-pressed:bg-default-active",
  primary:
    "bg-primary border-primary text-primary-foreground data-hovered:bg-primary-hover data-pressed:bg-primary-active",
  secondary:
    "bg-secondary border-secondary text-secondary-foreground data-hovered:bg-secondary-hover data-pressed:bg-secondary-active",
  success:
    "bg-success border-success text-success-foreground data-hovered:bg-success-hover data-pressed:bg-success-active",
  warning:
    "bg-warning border-warning text-warning-foreground data-hovered:bg-warning-hover data-pressed:bg-warning-active",
  danger:
    "bg-danger border-danger text-danger-foreground data-hovered:bg-danger-hover data-pressed:bg-danger-active",
} satisfies Record<Color, string>;

const borderedClasses = {
  default:
    "bg-transparent border-default text-foreground data-hovered:bg-default-soft data-pressed:bg-default-soft-active",
  primary:
    "bg-transparent border-primary text-primary data-hovered:bg-primary-soft data-pressed:bg-primary-soft-active",
  secondary:
    "bg-transparent border-secondary text-secondary data-hovered:bg-secondary-soft data-pressed:bg-secondary-soft-active",
  success:
    "bg-transparent border-success text-success data-hovered:bg-success-soft data-pressed:bg-success-soft-active",
  warning:
    "bg-transparent border-warning text-warning data-hovered:bg-warning-soft data-pressed:bg-warning-soft-active",
  danger:
    "bg-transparent border-danger text-danger data-hovered:bg-danger-soft data-pressed:bg-danger-soft-active",
} satisfies Record<Color, string>;

const textClasses = {
  default: "text-foreground data-hovered:opacity-90",
  primary: "text-primary data-hovered:text-primary-hover",
  secondary: "text-secondary data-hovered:text-secondary-hover",
  success: "text-success data-hovered:text-success-hover",
  warning: "text-warning data-hovered:text-warning-hover",
  danger: "text-danger data-hovered:text-danger-hover",
} satisfies Record<Color, string>;

const lightClasses = {
  default:
    "bg-transparent text-foreground data-hovered:bg-default-soft-hover data-pressed:bg-foreground-soft-active",
  primary:
    "bg-transparent text-primary data-hovered:bg-primary-soft-hover data-pressed:bg-primary-soft-active",
  secondary:
    "bg-transparent text-secondary data-hovered:bg-secondary-soft-hover data-pressed:bg-secondary-soft-active",
  success:
    "bg-transparent text-success data-hovered:bg-success-soft-hover data-pressed:bg-success-soft-active",
  warning:
    "bg-transparent text-warning data-hovered:bg-warning-soft-hover data-pressed:bg-warning-soft-active",
  danger:
    "bg-transparent text-danger data-hovered:bg-danger-soft-hover data-pressed:bg-danger-soft-active",
} satisfies Record<Color, string>;

const flatClasses = {
  default:
    "bg-default-soft-hover text-foreground data-hovered:bg-default-soft data-pressed:bg-default-soft-active",
  primary:
    "bg-primary-soft-hover text-primary data-hovered:bg-primary-soft data-pressed:bg-primary-soft-active",
  secondary:
    "bg-secondary-soft-hover text-secondary data-hovered:bg-secondary-soft data-pressed:bg-secondary-soft-active",
  success:
    "bg-success-soft-hover text-success data-hovered:bg-success-soft data-pressed:bg-success-soft-active",
  warning:
    "bg-warning-soft-hover text-warning data-hovered:bg-warning-soft data-pressed:bg-warning-soft-active",
  danger:
    "bg-danger-soft-hover text-danger data-hovered:bg-danger-soft data-pressed:bg-danger-soft-active",
} satisfies Record<Color, string>;

export const colorVariants = {
  solid: solidClasses,
  bordered: borderedClasses,
  text: textClasses,
  light: lightClasses,
  soft: flatClasses,
} satisfies Record<Variant, Record<Color, string>>;

export const allColors: Color[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
export const allVariants: Variant[] = [
  "solid",
  "bordered",
  "text",
  "light",
  "soft",
];

/**
 * focus classNames when the element is focused by keyboard.
 */
export const focusVisibleClasses = [
  "focus-visible:outline-solid",
  "focus-visible:z-10",
  "focus-visible:outline-2",
  "focus-visible:outline-focus",
  "focus-visible:outline-offset-2",
];

export const focusWithinClasses = [
  "focus-within:outline-solid",
  "focus-within:z-10",
  "focus-within:outline-2",
  "focus-within:outline-focus",
  "focus-within:outline-offset-2",
  "focus-within:data-invalid:outline-danger",
  "focus-within:group-data-invalid:outline-danger",
];

export const dataFocusVisibleClasses = [
  "outline-none",
  "data-focus-visible:z-10",
  "data-focus-visible:outline-2",
  "data-focus-visible:outline-solid",
  "data-focus-visible:outline-focus",
  "data-focus-visible:outline-offset-2",
  "has-data-invalid:data-focus-visible:outline-danger",
];

export const dataFocusRingClasses = [
  "data-focused:outline-solid",
  "data-focused:outline-2",
  "data-focused:outline-focus",
  "data-focused:outline-offset-2",
  "data-focused:data-invalid:outline-danger!",
];

export const variantStyles = tv({
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
      bordered: "border",
      light: "",
      text: "",
      soft: "",
    },
  },
  compoundVariants: [
    ...allVariants.flatMap((variant) =>
      allColors.map((color) => ({
        variant,
        color,
        className: colorVariants[variant][color],
      })),
    ),
  ],
});
