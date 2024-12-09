import type { VariantProps } from "@jamsr-ui/utils";
import { radiusVariant, tv } from "@jamsr-ui/utils";

export const test = "";
export const multiUploadVariant = tv({
  slots: {
    base: "flex w-full flex-col gap-1",
    innerWrapper: "flex flex-wrap gap-2",
    fileView: "group relative size-20",
    file: "size-full object-cover",
    deleteBtn:
      "absolute right-1 top-1 z-1 hidden rounded-full bg-content1 text-foreground hover:text-danger group-hover:block",
    picker:
      "group relative flex aspect-square size-20 select-none flex-col items-center justify-center border-2 border-solid border-divider",
    helperText: "text-xs text-foreground-400",
    info: "text-xs",
    overlayWrapper:
      "absolute inset-0 z-1 flex size-full items-center justify-center overflow-hidden text-white",
    overlay: "absolute inset-0 -z-1 flex size-full bg-black/50",
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
      },
    },
    radius: radiusVariant(["file", "picker", "overlayWrapper"]),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type MultiUploadVariants = VariantProps<typeof multiUploadVariant>;
export type MultiUploadSlots = keyof ReturnType<typeof multiUploadVariant>;
