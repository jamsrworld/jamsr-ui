// Classes are used in names for tailwind intellisense

const solidClasses = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
};

const shadowClasses = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary:
    "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
};

const outlinedClasses = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
};

const flatClasses = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-700",
  secondary: "bg-secondary/20 text-secondary-700",
  success: "bg-success/20 text-success-800 dark:text-success",
  warning: "bg-warning/20 text-warning-800 dark:text-warning",
  danger: "bg-danger/20 text-danger-800 dark:text-danger-500",
};

const linkClasses = {
  default: "text-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
};

const lightClasses = {
  default: "bg-transparent text-foreground data-[hover=true]:bg-default/20",
  primary: "bg-transparent text-primary data-[hover=true]:bg-primary/20",
  secondary: "bg-transparent text-secondary data-[hover=true]:bg-secondary/20",
  success: "bg-transparent text-success data-[hover=true]:bg-success/20",
  warning: "bg-transparent text-warning data-[hover=true]:bg-warning/20",
  danger: "bg-transparent text-danger data-[hover=true]:bg-danger/20",
};

const ghostClasses = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger",
};

export const colorVariants = {
  solid: solidClasses,
  shadow: shadowClasses,
  outlined: outlinedClasses,
  flat: flatClasses,
  link: linkClasses,
  light: lightClasses,
  ghost: ghostClasses,
};
