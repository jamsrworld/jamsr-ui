import type { VariantProps } from "@jamsr-ui/utils";
import { radiusVariant, tv } from "@jamsr-ui/utils";

export const test = "";
export const singleUploadVariants = tv({
  slots: {
    base: "inline-flex flex-col gap-2",
    picker:
      "group relative flex aspect-video select-none flex-col items-center justify-center border-2 border-solid border-default-200",
    image: "size-full rounded-inherit object-contain",
    deleteBtn:
      "absolute right-1 top-1 z-1 hidden rounded-full bg-content1 text-foreground hover:text-danger group-hover:block",
    description: "text-xs",
    info: "text-xs text-foreground-400",
    fileWrapper:
      "absolute inset-0 flex size-full flex-col items-center justify-center gap-1 rounded-inherit bg-content1",
    overlay:
      "absolute inset-0 flex size-full items-center justify-center rounded-inherit bg-black/60 text-white",
    helperText: "text-xs text-foreground-500",
    fileName: "max-w-[90%] truncate text-center text-xs",
    fileSize: "text-xs text-foreground-400",
    label: "shrink-0 select-none text-sm font-normal text-foreground",
  },
  variants: {
    radius: radiusVariant(["picker"]),
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
        image: "object-cover",
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
    radius: "md",
  },
});

export type UploadVariants = VariantProps<typeof singleUploadVariants>;
export type UploadSlots = keyof ReturnType<typeof singleUploadVariants>;
