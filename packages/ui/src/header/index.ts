import { Header as HeaderRoot } from "./header";

import type { VariantProps } from "tailwind-variants";

import type { headerStyles } from "./styles";

export const Header = Object.assign(HeaderRoot, {});

export namespace Header {
  export type Variants = VariantProps<typeof headerStyles>;
  export interface Props extends HeaderRoot.Props {}
}
