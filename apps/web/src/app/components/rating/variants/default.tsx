import { Rating, RatingProps } from "@jamsr-ui/react";

export const RatingDefault = (props: RatingProps) => {
  return (
    <Rating
      label="Rate your feedback!"
      {...props}
    />
  );
};
