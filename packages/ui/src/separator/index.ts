import type { VariantProps } from "tailwind-variants";
import { separatorStyles } from "./styles";
import { Separator as SeparatorRoot } from "./separator";

export const Separator = SeparatorRoot;

export namespace Separator {
  export type Variants = VariantProps<typeof separatorStyles>;
  export interface Props extends SeparatorRoot.Props {}
}
