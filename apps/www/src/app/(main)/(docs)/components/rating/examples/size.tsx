import { Rating } from "@jamsr-ui/react";

export const RatingSize = () => {
  return (
    <Rating
      label="Rate your feedback!"
      defaultValue={3}
      classNames={{
        starWrapper: "text-danger data-[checked=true]:text-primary",
        star: "size-8",
      }}
    />
  );
};
