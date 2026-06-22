import { Rating as RatingRoot } from "./rating";

import type { VariantProps } from "tailwind-variants";

import type { ratingStyles } from "./styles";

export const Rating = Object.assign(RatingRoot, {});

export namespace Rating {
  export type Variants = VariantProps<typeof ratingStyles>;
  export interface Props extends RatingRoot.Props {}
}
