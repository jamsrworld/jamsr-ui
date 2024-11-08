import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const checkbox = tv({
  slots: {
    base: [
      "flex flex-col gap-2",
      "ui-disabled:pointer-events-none ui-disabled:opacity-50",
      "ui-readonly:pointer-events-none",
    ],
    wrapper: "flex items-center gap-2",
    label: "text-foreground shrink-0 select-none text-sm font-normal subpixel-antialiased",
    helperText: "text-foreground-600 text-xs",
    checkbox: [
      "relative size-5 cursor-pointer appearance-none rounded-md border-2 transition-all duration-500 checked:border-blue-500 checked:bg-blue-500",
    ],
    checkboxWrapper: "relative flex size-max items-center",
  },
  variants: {
    isInvalid: {
      true: {
        label: "text-danger",
        helperText: "text-danger",
        checkbox: "border-danger",
      },
    },
  },
});

export type CheckboxVariantProps = VariantProps<typeof checkbox>;
export type CheckboxSlots = keyof ReturnType<typeof checkbox>;
