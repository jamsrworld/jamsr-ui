import type { VariantProps } from "tailwind-variants";
import { kbdStyles } from "./styles";
import { Kbd as KbdRoot } from "./kbd";

export const Kbd = Object.assign(KbdRoot, {});

export namespace Kbd {
  export type Variants = VariantProps<typeof kbdStyles>;
  export interface Props extends KbdRoot.Props {}
}
