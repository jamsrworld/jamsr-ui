import { Link as LinkRoot } from "./link";

import type { VariantProps } from "tailwind-variants";

import type { linkStyles } from "./styles";

export const Link = LinkRoot;

export namespace Link {
  export type Variants = VariantProps<typeof linkStyles>;
  export interface Props extends LinkRoot.Props {}
}
