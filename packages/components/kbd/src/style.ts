import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const kbd = tv({
  slots: {
    base: [
      "px-1.5",
      "py-0.5",
      "inline-flex",
      "space-x-0.5",
      "rtl:space-x-reverse",
      "items-center",
      "font-sans",
      "font-normal",
      "text-center",
      "text-sm",
      "shadow-sm",
      "bg-default-100",
      "text-foreground-600",
      "rounded-md",
    ],
    abbr: "no-underline",
    content: "",
  },
  variants: {},
  defaultVariants: {},
});

export type KbdVariantProps = VariantProps<typeof kbd>;
export type KbdSlots = keyof ReturnType<typeof kbd>;
