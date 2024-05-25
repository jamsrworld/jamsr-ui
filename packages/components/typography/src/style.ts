import { tv, type VariantProps } from "@jamsr-ui/utils";

export const typographyVariants = tv({
  base: "subpixel-antialiased",
  variants: {
    variant: {
      h1: "text-4xl font-semibold md:text-5xl",
      h2: "text-3xl font-semibold md:text-4xl",
      h3: "text-2xl font-semibold md:text-3xl",
      h4: "text-xl font-semibold md:text-2xl",
      h5: "text-lg font-semibold md:text-xl",
      h6: "text-base font-semibold",
      subtitle: "text-[14px] font-medium",
      subtitle2: "text-xs font-medium",
      body: "text-[14px]",
      body2: "text-sm",
      caption: "text-xs",
      "display-bold": "text-base font-medium md:text-lg",
      display: "text-base font-normal md:text-lg",
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
    spaced: {
      true: "leading-[1.9] tracking-wide sm:leading-[1.9]",
    },
    gutterBottom: {
      true: "mb-2",
    },
    fontSize: {
      inherit: "!text-size-inherit",
    },
  },
  defaultVariants: {
    spaced: false,
    variant: "body",
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
  ],
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
