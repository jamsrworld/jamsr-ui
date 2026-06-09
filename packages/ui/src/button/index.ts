import type { VariantProps } from "tailwind-variants";
import { buttonStyles } from "./styles";
import { Button as ButtonRoot } from "./button";

export const Button = ButtonRoot;

export namespace Button {
  export type Variants = VariantProps<typeof buttonStyles>;
  export interface Props extends ButtonRoot.Props {}
}
