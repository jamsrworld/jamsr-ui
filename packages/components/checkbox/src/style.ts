import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const checkbox = tv({
  slots: {
    base: [
      "group flex flex-col gap-2",
      "ui-disabled:opacity-50",
      "ui-disabled:cursor-not-allowed",
    ],
    wrapper: "flex items-center gap-2",
    label:
      "shrink-0 cursor-pointer select-none text-sm font-normal text-foreground",
    helperText: "text-xs text-foreground-600",
    checkbox: [
      "border-default-200 ui-group-hover:border-default-400",
      "relative size-5 cursor-pointer appearance-none rounded-md border-2 transition-all duration-500 ui-group-checked:border-primary ui-group-checked:bg-primary",
      "ui-group-disabled:cursor-not-allowed",
    ],
    trigger: [
      "relative flex size-max items-center",
      "disabled:cursor-not-allowed",
    ],
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
