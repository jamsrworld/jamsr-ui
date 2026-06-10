import { Separator as SeparatorRoot } from "./separator";

import type { VariantProps } from "tailwind-variants";

import type { separatorStyles } from "./styles";

export const Separator = SeparatorRoot;

export namespace Separator {
  export type Variants = VariantProps<typeof separatorStyles>;
  export interface Props extends SeparatorRoot.Props {}
}
