import type { VariantProps } from "tailwind-variants";
import { ratingStyles } from "./styles";
import { Rating as RatingRoot } from "./rating";

export const Rating = Object.assign(RatingRoot, {});

export namespace Rating {
  export type Variants = VariantProps<typeof ratingStyles>;
  export interface Props extends RatingRoot.Props {}
}
