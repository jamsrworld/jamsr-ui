import type { VariantProps } from "@jamsr-ui/utils";
import { tv } from "@jamsr-ui/utils";

export const ratingVariants = tv({
  slots: {
    labelWrapper: "",
    label: "shrink-0 select-none text-sm font-normal text-foreground",
    base: "flex flex-col gap-1",
    innerWrapper: "flex gap-1",
    helper: "text-xs text-foreground-600",
    starWrapper: [
      "data-[checked=true]:text-warning",
      "data-[interactive=true]:hover:scale-110",
      "data-[interactive=true]:transition-transform",
      "data-[interactive=true]:duration-300",
      "data-[interactive=true]:ease-in-out",
      "ui-disabled:cursor-not-allowed ui-disabled:opacity-60",
    ],
    star: "",
  },
  variants: {
    isInvalid: {
      true: {
        helper: "text-danger",
        label: "text-danger",
      },
    },
    isDisabled: {
      true: {
        starWrapper: "cursor-not-allowed opacity-50",
      },
    },
  },
});

export type RatingVariantProps = VariantProps<typeof ratingVariants>;
export type RatingSlots = keyof ReturnType<typeof ratingVariants>;
