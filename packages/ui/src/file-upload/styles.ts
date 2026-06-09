import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const fileUploadStyles = tv({
  slots: {
    root: [
      "flex flex-col gap-2 items-center justify-center",
      "w-full min-h-32 p-6",
      "rounded-lg border-2 border-dashed border-border",
      "bg-surface-secondary/50",
      "transition-colors",
      "hover:border-primary/50 hover:bg-primary/5",
      "data-[dragging=true]:border-primary data-[dragging=true]:bg-primary/10",
    ],
    input: "sr-only",
    label: "cursor-pointer text-sm text-foreground-secondary",
    icon: "size-10 text-foreground-tertiary mb-2",
    preview: "flex flex-wrap gap-2 mt-4",
    previewItem: [
      "relative rounded-md overflow-hidden",
      "w-20 h-20 border border-border",
    ],
    removeButton: [
      "absolute top-1 right-1",
      "rounded-full p-0.5 bg-black/50 text-white",
      "hover:bg-black/70",
    ],
  },
});

export type FileUploadVariants = VariantProps<typeof fileUploadStyles>;
