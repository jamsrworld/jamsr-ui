import { inputVariants } from "@jamsr-ui/input";
import { type VariantProps } from "@jamsr-ui/utils";

export const textareaVariants = inputVariants;

export type TextareaVariantProps = VariantProps<typeof textareaVariants>;
export type TextareaSlots = keyof ReturnType<typeof textareaVariants>;
