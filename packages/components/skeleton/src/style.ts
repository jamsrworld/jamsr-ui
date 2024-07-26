import { tv, type VariantProps } from "@jamsr-ui/utils";

export const skeleton = tv({
  slots: {
    base: [
      "group",
      "relative",
      "overflow-hidden",
      "bg-background-muted/90",
      "rounded-lg",
      // before
      "before:opacity-100",
      "before:absolute",
      "before:inset-0",
      "before:-translate-x-full",
      "before:animate-[shimmer_2s_infinite]",
      "before:border-t",
      "before:border-background-content4/30",
      "before:bg-gradient-to-r",
      "before:from-transparent",
      "before:via-background-content4",
      "dark:before:via-default-700/10",
      "before:to-transparent",
      // after
      "after:opacity-100",
      "after:absolute",
      "after:inset-0",
      "after:-z-10",
      "after:bg-background-content3",
      "dark:after:bg-background-content2",
      // state
      "data-[loaded=true]:!bg-transparent",
      "data-[loaded=true]:before:animate-none data-[loaded=true]:before:opacity-0",
      "data-[loaded=true]:after:opacity-0",
    ],
    content: ["opacity-0", "group-data-[loaded=true]:opacity-100"],
  },

  variants: {
    disableAnimation: {
      true: {
        base: "before:transition-none",
        content: "transition-none",
      },
      false: {
        base: "transition-all !duration-300 before:transition-opacity before:!duration-300",
        content:
          "transition-opacity !duration-300 motion-reduce:transition-none",
      },
    },
  },
  defaultVariants: {
    disableAnimation: false,
  },
});

export type SkeletonVariantProps = VariantProps<typeof skeleton>;
export type SkeletonSlots = keyof ReturnType<typeof skeleton>;
