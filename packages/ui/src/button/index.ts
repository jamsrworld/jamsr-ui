import { Button as ButtonRoot } from "./button";

import type { VariantProps } from "tailwind-variants";

import type { buttonStyles } from "./styles";

export const Button = ButtonRoot;

export namespace Button {
  export type Variants = VariantProps<typeof buttonStyles>;
  export interface Props extends ButtonRoot.Props {}
}
