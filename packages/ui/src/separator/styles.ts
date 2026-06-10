import { tv } from "tailwind-variants";

export const separatorStyles = tv({
  base: "",
  variants: {
    orientation: {
      vertical: "w-px h-full",
      horizontal: "h-px",
    },
    variant: {
      light: "bg-border-light",
      dark: "bg-border-dark",
      default: "bg-border",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});
