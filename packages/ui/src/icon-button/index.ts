import type { VariantProps } from "tailwind-variants";
import { iconButtonStyles } from "./styles";
import { IconButton as IconButtonRoot } from "./icon-button";

export const IconButton = IconButtonRoot;

export namespace IconButton {
  export type Variants = VariantProps<typeof iconButtonStyles>;
  export interface Props extends IconButtonRoot.Props {}
}
