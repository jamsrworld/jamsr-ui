import { IconButton as IconButtonRoot } from "./icon-button";

import type { VariantProps } from "tailwind-variants";

import type { iconButtonStyles } from "./styles";

export const IconButton = IconButtonRoot;

export namespace IconButton {
  export type Variants = VariantProps<typeof iconButtonStyles>;
  export interface Props extends IconButtonRoot.Props {}
}
