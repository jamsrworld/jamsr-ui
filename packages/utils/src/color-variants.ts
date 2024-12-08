// Classes are used in names for tailwind intellisense

const solidClasses = {
  default:
    "bg-default text-default-foreground ui-hover:bg-default-300 dark:ui-hover:bg-default-300",
  primary:
    "bg-primary text-primary-foreground ui-hover:bg-primary-700 dark:ui-hover:bg-primary-300",
  secondary:
    "bg-secondary text-secondary-foreground ui-hover:bg-secondary-600 dark:ui-hover:bg-secondary-300",
  success:
    "bg-success text-success-foreground ui-hover:bg-success-600 dark:ui-hover:bg-success-300",
  warning:
    "bg-warning text-warning-foreground ui-hover:bg-warning-600 dark:ui-hover:bg-warning-300",
  danger:
    "bg-danger text-danger-foreground ui-hover:bg-danger-600 dark:ui-hover:bg-danger-300",
};

const outlinedClasses = {
  default:
    "bg-transparent border-default text-foreground ui-hover:bg-default-50",
  primary: "bg-transparent border-primary text-primary ui-hover:bg-primary-50",
  secondary:
    "bg-transparent border-secondary text-secondary ui-hover:bg-secondary-50",
  success: "bg-transparent border-success text-success ui-hover:bg-success-50",
  warning: "bg-transparent border-warning text-warning ui-hover:bg-warning-50",
  danger: "bg-transparent border-danger text-danger ui-hover:bg-danger-50",
};

const textClasses = {
  default: "text-foreground ui-hover:text-foreground-600",
  primary: "text-primary ui-hover:text-primary-600",
  secondary: "text-secondary ui-hover:text-secondary-600",
  success: "text-success ui-hover:text-success-600",
  warning: "text-warning ui-hover:text-warning-600",
  danger: "text-danger ui-hover:text-danger-600",
};

const lightClasses = {
  default: "bg-transparent text-foreground ui-hover:bg-default-100",
  primary: "bg-transparent text-primary ui-hover:bg-primary-50",
  secondary: "bg-transparent text-secondary ui-hover:bg-secondary-50",
  success: "bg-transparent text-success ui-hover:bg-success-50",
  warning: "bg-transparent text-warning ui-hover:bg-warning-50",
  danger: "bg-transparent text-danger ui-hover:bg-danger-50",
};

const flatClasses = {
  default: "bg-default/40 text-default-foreground ui-hover:bg-default/30",
  primary: "bg-primary/20 text-primary ui-hover:bg-primary/30",
  secondary: "bg-secondary/20 text-secondary ui-hover:bg-secondary/30",
  success:
    "bg-success/20 text-success-600 dark:text-success ui-hover:bg-success/30",
  warning:
    "bg-warning/20 text-warning-600 dark:text-warning ui-hover:bg-warning/30",
  danger: "bg-danger/20 text-danger dark:text-danger-500 ui-hover:bg-danger/30",
};

export const colorVariants = {
  solid: solidClasses,
  outlined: outlinedClasses,
  text: textClasses,
  light: lightClasses,
  flat: flatClasses,
};

export const radiusBaseVariant = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
  none: "rounded-none",
} as const;

export const radiusVariant = (name: string) => {
  return {
    sm: { [name]: "rounded" },
    md: { [name]: "rounded-md" },
    lg: { [name]: "rounded-lg" },
    xl: { [name]: "rounded-xl" },
    "2xl": { [name]: "rounded-2xl" },
    "3xl": { [name]: "rounded-3xl" },
    full: { [name]: "rounded-full" },
    none: { [name]: "rounded-none" },
  };
};
