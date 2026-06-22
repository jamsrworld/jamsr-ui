import { tv } from "tailwind-variants";

export const cardStyles = tv({
  slots: {
    root: "relative flex flex-col overflow-hidden transition-colors",
    surface: "ring-0.5 ring-inset ring-border",
    header: "relative flex flex-col px-3 pt-3",
    title: "font-medium",
    description: "text-foreground-secondary",
    footer: "flex justify-end gap-2 px-3 pb-3",
    content: "h-full",
  },
  variants: {
    bg: {
      default: {
        surface: "bg-surface",
      },
      secondary: {
        surface: "bg-surface-secondary",
      },
      tertiary: {
        surface: "bg-surface-tertiary",
      },
      quaternary: {
        surface: "bg-surface-quaternary",
      },
    },
    isBordered: {
      true: { surface: "border border-border-dark" },
      false: {},
    },
    shadow: {
      none: { surface: "shadow-none" },
      sm: { surface: "shadow-sm" },
      md: { surface: "shadow-md" },
      lg: { surface: "shadow-lg" },
    },
    radius: {
      none: { surface: "rounded-none" },
      sm: { surface: "rounded-sm" },
      md: { surface: "rounded-md" },
      lg: { surface: "rounded-lg" },
      xl: { surface: "rounded-xl" },
      full: { surface: "rounded-full" },
    },
    contentPadding: {
      none: { content: "p-0" },
      x: { content: "px-3" },
      y: { content: "py-3" },
      both: { content: "px-3 py-3" },
    },
    surface: {
      card: {},
      content: {
        header: "mb-1",
      },
    },
  },

  defaultVariants: {
    bg: "default",
    radius: "md",
    isBordered: false,
    contentPadding: "both",
    shadow: "sm",
    surface: "card",
  },
});
