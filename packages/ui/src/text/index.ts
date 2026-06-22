import { Text as TextRoot } from "./text";

import type { VariantProps } from "tailwind-variants";

import type { textStyles } from "./styles";

export const Text = TextRoot;

export namespace Text {
  export type Variants = VariantProps<typeof textStyles>;
  export interface Props extends TextRoot.Props {}
}
