import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const textStyles = tv({
  base: "transition-colors cursor-default",
  variants: {
    variant: {
      h1: "text-4xl leading-tight",
      h2: "text-3xl leading-tight",
      h3: "text-2xl leading-tight",
      h4: "text-xl leading-tight",
      h5: "text-lg leading-tight",
      h6: "text-md leading-tight",
      lead: "text-2xs",
      caption: "text-xs",
      paragraph2: "text-sm",
      paragraph: "text-base",
      body1: "text-md",
      body2: "text-lg",
      body3: "text-xl",
      body4: "text-2xl",
      body5: "text-3xl",
      body6: "text-4xl leading-tight",
      body7: "text-5xl leading-tight",
      inherit: "",
    },
    leading: {
      none: "leading-none",
      md: "leading-[1.7]",
    },
  },
  compoundVariants: [
    {
      variant: ["h1", "h2", "h3"],
      className: "font-bold",
    },
    {
      variant: ["h4", "h5", "h6"],
      className: "font-semibold",
    },
    {
      variant: ["body1", "body2", "body3", "body4"],
      className: "font-normal",
    },
    {
      variant: ["body5", "body6", "body7"],
      className: "font-medium",
    },
  ],
});

export type TextVariants = VariantProps<typeof textStyles>;
