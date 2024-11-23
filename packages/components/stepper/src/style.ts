import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const stepper = tv({
  slots: {
    base: "inline-flex items-center gap-2",
    value: "",
    button: ["", "ui-disabled:cursor-not-allowed ui-disabled:opacity-50"],
  },
  variants: {},
  defaultVariants: {},
});

export type StepperVariantsProps = VariantProps<typeof stepper>;

export type StepperSlots = keyof ReturnType<typeof stepper>;
