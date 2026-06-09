import { tv } from "tailwind-variants";

export const labelStyles = tv({
  base: [
    "cursor-interactive shrink-0 text-sm font-medium text-foreground group-data-invalid:text-danger",
    "group-data-disabled:status-disabled",
    "group-data-invalid:text-danger",
  ],
});
