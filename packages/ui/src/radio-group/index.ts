import {
  Radio as RadioRoot,
  RadioGroup as RadioGroupRoot,
  RadioIndicator,
} from "./radio-group";

import type { VariantProps } from "tailwind-variants";

import type { radioStyles } from "./styles";

export const Radio = Object.assign(RadioRoot, {
  Indicator: RadioIndicator,
});

export namespace Radio {
  export type Variants = VariantProps<typeof radioStyles>;
  export interface Props extends RadioRoot.Props {}
}

export const RadioGroup = RadioGroupRoot;

export namespace RadioGroup {
  export interface Props extends RadioGroupRoot.Props {}
  export type Variants = VariantProps<typeof radioStyles>;
}
