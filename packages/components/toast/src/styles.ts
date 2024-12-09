import { radiusVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const toastStyle = tv({
  slots: {
    toast:
      "!max-w-[unset] border-none !bg-content1 !text-foreground !shadow-lg",
  },
  variants: {
    radius: radiusVariant("base"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type ToastVariantProps = VariantProps<typeof toastStyle>;
export type ToastSlots = keyof ReturnType<typeof toastStyle>;
