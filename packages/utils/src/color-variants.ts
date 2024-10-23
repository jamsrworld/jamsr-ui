// Classes are used in names for tailwind intellisense

const solidClasses = {
  default: "bg-default text-default-foreground ui-hover:bg-default-300",
  primary: "bg-primary text-primary-foreground ui-hover:bg-primary-600",
  secondary: "bg-secondary text-secondary-foreground ui-hover:bg-secondary-600",
  success: "bg-success text-success-foreground ui-hover:bg-success-600",
  warning: "bg-warning text-warning-foreground ui-hover:bg-warning-600",
  danger: "bg-danger text-danger-foreground ui-hover:bg-danger-600",
};

const outlinedClasses = {
  default: "bg-transparent border-default text-foreground hover:bg-default-50",
  primary: "bg-transparent border-primary text-primary hover:bg-primary-50",
  secondary:
    "bg-transparent border-secondary text-secondary hover:bg-secondary-50",
  success: "bg-transparent border-success text-success hover:bg-success-50",
  warning: "bg-transparent border-warning text-warning hover:bg-warning-50",
  danger: "bg-transparent border-danger text-danger hover:bg-danger-50",
};

const textClasses = {
  default: "text-foreground hover:text-foreground-600",
  primary: "text-primary hover:text-primary-600",
  secondary: "text-secondary hover:text-secondary-600",
  success: "text-success hover:text-success-600",
  warning: "text-warning hover:text-warning-600",
  danger: "text-danger hover:text-danger-600",
};

const lightClasses = {
  default: "bg-transparent text-foreground data-[hover=true]:bg-default-100",
  primary: "bg-transparent text-primary data-[hover=true]:bg-primary-50",
  secondary: "bg-transparent text-secondary data-[hover=true]:bg-secondary-50",
  success: "bg-transparent text-success data-[hover=true]:bg-success-50",
  warning: "bg-transparent text-warning data-[hover=true]:bg-warning-50",
  danger: "bg-transparent text-danger data-[hover=true]:bg-danger-50",
};

export const colorVariants = {
  solid: solidClasses,
  outlined: outlinedClasses,
  text: textClasses,
  light: lightClasses,
};
