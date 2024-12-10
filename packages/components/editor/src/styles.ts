import type { VariantProps } from "@jamsr-ui/utils";
import { radiusVariant, tv } from "@jamsr-ui/utils";

export const test = "";
export const editorVariants = tv({
  slots: {
    base: "group flex flex-col gap-1",
    editor:
      "border-2 border-default-200 p-2 ui-group-hover:border-default-400 ui-group-focus:border-primary ui-group-disabled:cursor-not-allowed",
    content:
      "max-h-[400px] min-h-[200px] overflow-y-auto border-t border-divider py-2",
    helperText: "text-xs text-foreground-400",
    label: "shrink-0 select-none text-sm font-normal text-foreground",
  },
  variants: {
    isInvalid: {
      true: {
        editor: "border-danger",
        helperText: "text-danger",
      },
    },
    radius: radiusVariant("editor"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type EditorVariantsProps = VariantProps<typeof editorVariants>;
export type EditorVariantsSlots = keyof ReturnType<typeof editorVariants>;
