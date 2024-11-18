import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const stepper = tv({
  slots: {
    base: "flex items-center gap-2",
    value: "",
    button: "",
  },
  variants: {},
  defaultVariants: {},
});

export type StepperVariantsProps = VariantProps<typeof stepper>;

export type StepperSlots = keyof ReturnType<typeof stepper>;
