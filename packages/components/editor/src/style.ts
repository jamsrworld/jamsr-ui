import type { VariantProps } from "@jamsr-ui/utils";
import { tv } from "@jamsr-ui/utils";

export const editorVariants = tv({
  slots: {
    base: "flex flex-col gap-1",
    editor: "rounded-2xl border-2 border-divider p-2",
    content: "min-h-[200px] border-t border-divider py-2",
    helperText: "text-xs text-foreground-400",
  },
  variants: {
    isInvalid: {
      true: {
        editor: "border-error",
        helperText: "text-error",
      },
    },
  },
});

export type EditorVariantsProps = VariantProps<typeof editorVariants>;
export type EditorVariantsSlots = keyof ReturnType<typeof editorVariants>;
