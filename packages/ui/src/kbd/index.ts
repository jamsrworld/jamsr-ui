import { Kbd as KbdRoot } from "./kbd";

import type { VariantProps } from "tailwind-variants";

import type { kbdStyles } from "./styles";

export const Kbd = Object.assign(KbdRoot, {});

export namespace Kbd {
  export type Variants = VariantProps<typeof kbdStyles>;
  export interface Props extends KbdRoot.Props {}
}
