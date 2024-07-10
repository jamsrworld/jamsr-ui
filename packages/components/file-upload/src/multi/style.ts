import type { VariantProps } from "@jamsr-ui/utils";
import { tv } from "@jamsr-ui/utils";

export const multiUploadVariant = tv({
  slots: {
    base: "flex flex-col gap-1",
    innerWrapper: "flex gap-2",
    fileView: "group relative size-20",
    file: "size-full rounded-lg object-cover",
    deleteBtn:
      "absolute right-1 top-1 hidden size-4 rounded-full bg-error text-white hover:bg-error-300 group-hover:block",
    picker:
      "group relative flex aspect-video select-none flex-col items-center justify-center rounded-lg border-2 border-dashed border-divider",
    helperText: "text-xs text-foreground-400",
    info: "text-xs",
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
        picker: "border-error text-error",
        helperText: "text-error",
        info: "text-error",
      },
    },
  },
});

export type MultiUploadVariants = VariantProps<typeof multiUploadVariant>;
export type MultiUploadSlots = keyof ReturnType<typeof multiUploadVariant>;
