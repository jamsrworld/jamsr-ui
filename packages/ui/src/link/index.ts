import type { VariantProps } from "tailwind-variants";
import { linkStyles } from "./styles";
import { Link as LinkRoot } from "./link";

export const Link = LinkRoot;

export namespace Link {
  export type Variants = VariantProps<typeof linkStyles>;
  export interface Props extends LinkRoot.Props {}
}
