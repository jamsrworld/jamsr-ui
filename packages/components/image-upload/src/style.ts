import { VariantProps, tv } from "@jamsr-ui/utils";

export const uploadVariants = tv({
  slots: {
    base: "group select-none relative flex aspect-video flex-col items-center justify-center rounded-lg border-2 border-dashed border-divider",
    image: "absolute h-full w-full rounded-md object-cover",
    deleteBtn:
      "hidden group-hover:block absolute right-0 top-0 hover:text-error",
    info: "text-xs",
    overlay:
      "absolute inset-0 size-full bg-black/60 justify-center flex items-center",
  },
  variants: {
    disabled: {
      true: {
        base: "cursor-not-allowed",
      },
      false: {
        base: "hover:border-solid hover:border-secondary hover:bg-secondary-50 hover:text-secondary",
      },
    },
    isAvatar: {
      true: {
        base: "size-24 rounded-full aspect-square",
      },
      false: {
        base: "gap-4 p-4",
      },
    },
    isDragActive: {
      true: {
        base: "border-solid border-primary bg-primary-50 text-primary",
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export type UploadVariants = VariantProps<typeof uploadVariants>;
export type UploadSlots = keyof ReturnType<typeof uploadVariants>;
