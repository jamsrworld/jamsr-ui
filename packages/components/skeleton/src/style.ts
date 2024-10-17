import { tv, type VariantProps } from "@jamsr-ui/utils";

const skeleton = tv({
  slots: {
    base: [
      "group",
      "relative",
      "overflow-hidden",
      "bg-content3 dark:bg-content2",
      "pointer-events-none",
      // before
      "before:opacity-100",
      "before:absolute",
      "before:inset-0",
      "before:-translate-x-full",
      "before:animate-[shimmer_2s_infinite]",
      "before:border-t",
      "before:border-content4/30",
      "before:bg-gradient-to-r",
      "before:from-transparent",
      "before:via-content4",
      "dark:before:via-default-700/10",
      "before:to-transparent",
      // after
      "after:opacity-100",
      "after:absolute",
      "after:inset-0",
      "after:-z-10",
      "after:bg-content3",
      "dark:after:bg-content2",
      // state
      "data-[loaded=true]:pointer-events-auto",
      "data-[loaded=true]:overflow-visible",
      "data-[loaded=true]:!bg-transparent",
      "data-[loaded=true]:before:-z-10 data-[loaded=true]:before:animate-none data-[loaded=true]:before:opacity-0",
      "data-[loaded=true]:after:opacity-0",
    ],
    content: ["opacity-0", "group-data-[loaded=true]:opacity-100"],
  },
  variants: {
    disableAnimation: {
      true: {
        base: "before:animate-none before:transition-none after:transition-none",
        content: "transition-none",
      },
      false: {
        base: "transition-[background] !duration-300",
        content:
          "transition-opacity !duration-300 motion-reduce:transition-none",
      },
    },
  },
  defaultVariants: {},
});

export type SkeletonVariantProps = VariantProps<typeof skeleton>;
export type SkeletonSlots = keyof ReturnType<typeof skeleton>;

export { skeleton };
