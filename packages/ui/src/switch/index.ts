import { Switch as SwitchRoot, SwitchThumb } from "./switch";

import type { VariantProps } from "tailwind-variants";

import type { switchStyles } from "./styles";

export const Switch = Object.assign(SwitchRoot, {
  Thumb: SwitchThumb,
});

export namespace Switch {
  export type Variants = VariantProps<typeof switchStyles>;
  export interface Props extends SwitchRoot.Props {}
}
