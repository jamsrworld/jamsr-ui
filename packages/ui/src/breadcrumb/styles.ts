import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const breadcrumbStyles = tv({
  slots: {
    root: "flex items-center gap-1",
    item: "flex items-center gap-1 text-sm text-foreground-secondary transition-colors hover:text-foreground",
    separator: "text-foreground-tertiary",
    current: "text-foreground font-medium",
  },
});

export type BreadcrumbVariants = VariantProps<typeof breadcrumbStyles>;
