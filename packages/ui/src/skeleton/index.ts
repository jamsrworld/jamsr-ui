import { Skeleton as SkeletonRoot } from "./skeleton";

import type { VariantProps } from "tailwind-variants";

import type { skeletonStyles } from "./styles";

export const Skeleton = Object.assign(SkeletonRoot, {});

export namespace Skeleton {
  export type Variants = VariantProps<typeof skeletonStyles>;
  export interface Props extends SkeletonRoot.Props {}
}
