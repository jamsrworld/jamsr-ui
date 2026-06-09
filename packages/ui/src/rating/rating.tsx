import { Rating as RatingUI } from "@jamsrui/react";

import { ratingStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type RatingVariants = VariantProps<typeof ratingStyles>;

export const Rating = (props: Rating.Props) => {
  const { size, isReadOnly, className, ...rest } = props;
  const styles = ratingStyles({ size, isReadOnly });

  return <RatingUI {...rest} className={styles.root({ className })} />;
};

export namespace Rating {
  export interface Props extends RatingUI.Props, RatingVariants {}
}
