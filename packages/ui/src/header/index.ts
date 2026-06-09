import type { VariantProps } from "tailwind-variants";
import { headerStyles } from "./styles";
import { Header as HeaderRoot } from "./header";

export const Header = Object.assign(HeaderRoot, {});

export namespace Header {
  export type Variants = VariantProps<typeof headerStyles>;
  export interface Props extends HeaderRoot.Props {}
}
