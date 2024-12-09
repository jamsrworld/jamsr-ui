import { radiusVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const checkbox = tv({
  slots: {
    base: [
      "group flex flex-col gap-2",
      "ui-disabled:opacity-60",
      "ui-disabled:cursor-not-allowed",
    ],
    wrapper: "flex gap-2",
    label:
      "shrink-0 select-none text-sm font-normal leading-none text-foreground ui-group-interactive:cursor-pointer ui-group-disabled:cursor-not-allowed",
    helperText: "text-xs text-foreground-600",
    checkbox: [
      "border-default-200 ui-group-hover:border-default-400",
      "relative size-5 appearance-none border-2 transition-all duration-500 ui-group-checked:border-primary ui-group-checked:bg-primary ui-group-interactive:cursor-pointer",
      "ui-group-disabled:cursor-not-allowed",
    ],
    trigger: [
      "relative flex size-max items-center",
      "disabled:cursor-not-allowed",
    ],
    description: "text-xs text-foreground-500",
    content: "flex flex-col justify-center gap-1",
  },
  variants: {
    isInvalid: {
      true: {
        label: "text-danger",
        helperText: "text-danger",
        checkbox: "border-danger",
      },
    },
    radius: radiusVariant("checkbox"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type CheckboxVariantProps = VariantProps<typeof checkbox>;
export type CheckboxSlots = keyof ReturnType<typeof checkbox>;
