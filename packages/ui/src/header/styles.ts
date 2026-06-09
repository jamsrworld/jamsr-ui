import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const headerStyles = tv({
  base: "flex items-center justify-between w-full px-4 py-3 border-b border-border bg-surface/80 backdrop-blur-md",
});

export type HeaderVariants = VariantProps<typeof headerStyles>;
