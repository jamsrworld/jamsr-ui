import { Rating } from "@jamsr-ui/react";

export const RatingReadonly = () => {
  return (
    <Rating
      isReadonly
      defaultValue={5}
      label="Rate your feedback!"
      classNames={{
        starWrapper: "text-danger data-[checked=true]:text-primary",
        star: "size-8",
      }}
    />
  );
};
