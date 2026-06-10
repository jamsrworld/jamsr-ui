import { Chip as ChipRoot, ChipDot } from "./chip";

import type { VariantProps } from "tailwind-variants";

import type { chipStyles } from "./styles";

export const Chip = Object.assign(ChipRoot, {
  Dot: ChipDot,
});

export namespace Chip {
  export type Variants = VariantProps<typeof chipStyles>;
  export interface Props extends ChipRoot.Props {}
  export interface Dot extends ChipDot.Props {}
}
