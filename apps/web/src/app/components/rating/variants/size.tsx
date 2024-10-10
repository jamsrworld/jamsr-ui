import { RatingDefault } from "./default";

export const RatingSize = () => {
  return (
    <RatingDefault
      classNames={{
        starWrapper: "text-danger data-[checked=true]:text-primary",
        star: "size-8",
      }}
      defaultValue={3}
    />
  );
};
