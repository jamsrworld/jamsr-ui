import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const copyToClipboard = tv({
  slots: {
    base: "relative z-1 inline-flex cursor-copy items-center gap-0.5 hover:opacity-80",
    button: "cursor-copy aria-hidden:hidden",
    icon: "size-4",
  },
});

export type CopyToClipboardVariantProps = VariantProps<typeof copyToClipboard>;
export type CopyToClipboardSlots = keyof ReturnType<typeof copyToClipboard>;
