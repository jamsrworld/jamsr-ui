import type { VariantProps } from "tailwind-variants";
import { skeletonStyles } from "./styles";
import { Skeleton as SkeletonRoot } from "./skeleton";

export const Skeleton = Object.assign(SkeletonRoot, {});

export namespace Skeleton {
  export type Variants = VariantProps<typeof skeletonStyles>;
  export interface Props extends SkeletonRoot.Props {}
}
