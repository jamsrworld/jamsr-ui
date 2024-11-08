import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";

export const otpInput = tv({
  slots: {
    base: "flex flex-col gap-2",
    label: "shrink-0 select-none text-sm font-normal text-foreground-400 subpixel-antialiased",
    wrapper: "flex flex-col gap-1",
    inputsWrapper: "flex gap-2",
    helperText: "text-xs text-foreground-600",
    input:
      "size-12 rounded border-2 border-divider bg-transparent text-center text-base outline-none hover:border-gray-400 focus:border-primary",
  },
  variants: {
    isInvalid: {
      true: {
        helperText: "text-danger",
      },
    },
  },
});

export type OtpInputVariantProps = VariantProps<typeof otpInput>;
export type OtpInputSlots = keyof ReturnType<typeof otpInput>;
