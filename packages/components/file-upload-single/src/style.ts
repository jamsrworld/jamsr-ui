import type { VariantProps } from "@jamsr-ui/utils";
import { tv } from "@jamsr-ui/utils";

export const singleUploadVariants = tv({
  slots: {
    base: "group flex flex-col gap-2",
    picker:
      "group relative flex aspect-video select-none flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-divider",
    image: "size-full rounded-md object-cover",
    deleteBtn:
      "absolute right-0 top-0 z-1 hidden hover:text-danger group-hover:block",
    description: "text-xs",
    info: "text-xs text-foreground-400",
    fileWrapper:
      "absolute inset-0 flex size-full flex-col items-center justify-center gap-1 bg-content1",
    overlay:
      "absolute inset-0 flex size-full items-center justify-center bg-black/60 text-white",
    helperText: "text-xs text-foreground-500",
    fileName: "max-w-[90%] truncate text-center text-xs",
    fileSize: "text-xs text-foreground-400",
    label: "shrink-0 select-none text-sm font-normal text-foreground",
  },
  variants: {
    isDisabled: {
      true: {
        picker: "cursor-not-allowed opacity-disabled",
      },
      false: {
        picker:
          "hover:border-solid hover:border-primary hover:bg-primary-50 hover:text-primary",
        description: "group-hover:!text-primary",
        info: "group-hover:!text-primary",
      },
    },
    isAvatar: {
      true: {
        picker: "aspect-square size-24 rounded-full",
      },
      false: {
        picker: "gap-4 p-4",
      },
    },
    isDragActive: {
      true: {
        picker: "border-solid border-primary bg-primary-50 text-primary",
      },
    },
    isInvalid: {
      true: {
        picker: "border-danger text-danger",
        helperText: "text-danger",
        info: "text-danger",
        description: "text-danger",
      },
    },
  },
  defaultVariants: {
    isDisabled: false,
  },
});

export type UploadVariants = VariantProps<typeof singleUploadVariants>;
export type UploadSlots = keyof ReturnType<typeof singleUploadVariants>;
