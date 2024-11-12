import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const typographyVariants = tv({
  base: "subpixel-antialiased transition-colors",
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
      paragraph2: "text-sm leading-[1.7]",
      paragraph: "text-base leading-[1.7]",
      body1: "text-md leading-[1.7]",
      body2: "text-lg leading-[1.7]",
      body3: "text-xl leading-[1.7]",
      body4: "text-2xl",
      body5: "text-3xl",
      body6: "text-4xl leading-tight",
      body7: "text-5xl leading-tight",
    },
    gradient: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground:
        "from-neutral-800 via-neutral-600 to-neutral-400 dark:from-neutral-600 dark:via-neutral-400 dark:to-white",
    },
    leading: {
      none: "leading-none",
      md: "leading-[1.7]",
    },
    gutterBottom: {
      true: "mb-2",
    },
  },
  defaultVariants: {},
  compoundVariants: [
    {
      gradient: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      className: "bg-gradient-to-b bg-clip-text text-transparent",
    },
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
  ],
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
