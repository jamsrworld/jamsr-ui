import { TextArea as TextAreaRoot } from "./textarea";

import type { InputVariants } from "../input/styles";

export const TextArea = TextAreaRoot;

export namespace TextArea {
  export type Variants = InputVariants;
  export interface Props extends TextAreaRoot.Props {}
}
