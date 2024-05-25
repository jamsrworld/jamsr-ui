import { tv, type VariantProps } from "@jamsr-ui/utils";

export const alertVariant = tv({
  slots: {
    wrapper: "relative flex gap-2 rounded-lg p-4 text-sm",
    title: "flex gap-2 font-normal",
    message: "flex flex-col gap-1 self-center break-all",
  },
  variants: {
    severity: {
      primary: {
        wrapper: "border border-primary-600 text-primary-600",
      },
      success: {
        wrapper: "border border-success-600 text-success-600",
      },
      warning: {
        wrapper: "border border-warning-600 text-warning-600",
      },
      error: { wrapper: "border border-error-600 text-error-500" },
      info: { wrapper: "border border-blue-600 text-blue-500" },
      default: { wrapper: "border border-default-600 text-default-500" },
    },
  },
});
export type AlertVariantProps = VariantProps<typeof alertVariant>;
