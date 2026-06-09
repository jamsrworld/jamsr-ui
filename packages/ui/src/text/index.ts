import type { VariantProps } from "tailwind-variants";
import { textStyles } from "./styles";
import { Text as TextRoot } from "./text";

export const Text = TextRoot;

export namespace Text {
  export type Variants = VariantProps<typeof textStyles>;
  export interface Props extends TextRoot.Props {}
}
