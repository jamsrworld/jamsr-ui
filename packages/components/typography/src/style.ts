import { tv, type VariantProps } from "@jamsr-ui/utils";

export const typographyVariants = tv({
  base: "subpixel-antialiased",
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl lg:text-4xl",
      h4: "text-xl md:text-2xl lg:text-3xl",
      h5: "text-lg md:text-xl lg:text-2xl",
      h6: "text-base md:text-lg lg:text-xl",
      caption: "text-xs",
      paragraph: "text-sm",
      body1: "text-sm md:text-base",
      body2: "text-base md:text-lg",
      body3: "text-lg md:text-xl",
      body4: "text-xl md:text-2xl",
    },
    gradient: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    leading: {
      none: "leading-none",
      md: "!leading-[1.7]",
    },
    gutterBottom: {
      true: "mb-2",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
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
      class: "bg-gradient-to-b bg-clip-text text-transparent",
    },
    {
      variant: ["h1", "h2", "h3", "h4", "h5", "h6"],
      className: "font-semibold",
    },
    {
      variant: ["body1", "body2", "body3", "body4"],
      className: "font-normal",
    },
  ],
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
