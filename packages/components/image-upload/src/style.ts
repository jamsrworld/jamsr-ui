import type { VariantProps } from "@jamsr-ui/utils";
import { tv } from "@jamsr-ui/utils";

export const multiUploadVariant = tv({
  slots: {
    base: "flex gap-2",
    fileView: "group relative size-20",
    file: "size-full rounded-lg object-cover",
    deleteBtn:
      "absolute right-1 top-1 hidden size-4 rounded-full bg-error text-white hover:bg-error-300 group-hover:block",
    picker:
      "group relative flex aspect-video select-none flex-col items-center justify-center rounded-lg border-2 border-dashed border-divider",
  },
  variants: {
    isDisabled: {
      true: {
        picker: "cursor-not-allowed opacity-disabled",
      },
      false: {
        picker:
          "hover:border-solid hover:border-primary hover:bg-primary-50 hover:text-primary",
      },
    },
    isDragActive: {
      true: {
        picker: "border-solid border-primary bg-primary-50 text-primary",
      },
    },
  },
});

export type MultiUploadVariants = VariantProps<typeof multiUploadVariant>;
export type MultiUploadSlots = keyof ReturnType<typeof multiUploadVariant>;

export const uploadVariants = tv({
  slots: {
    base: "group relative flex aspect-video select-none flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-divider",
    image: "absolute size-full rounded-md object-cover",
    deleteBtn:
      "absolute right-0 top-0 hidden hover:text-error group-hover:block",
    info: "text-xs",
    file: "absolute inset-0 flex size-full flex-col items-center justify-center gap-1 bg-black",
    overlay:
      "absolute inset-0 flex size-full items-center justify-center bg-black/60",
  },
  variants: {
    isDisabled: {
      true: {
        base: "cursor-not-allowed opacity-disabled",
      },
      false: {
        base: "hover:border-solid hover:border-primary hover:bg-primary-50 hover:text-primary",
      },
    },
    isAvatar: {
      true: {
        base: "aspect-square size-24 rounded-full",
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
    isDisabled: false,
  },
});

export type UploadVariants = VariantProps<typeof uploadVariants>;
export type UploadSlots = keyof ReturnType<typeof uploadVariants>;
