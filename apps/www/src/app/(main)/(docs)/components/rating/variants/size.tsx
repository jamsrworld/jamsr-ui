import { RatingUsage } from "./usage";

export const RatingSize = () => {
  return (
    <RatingUsage
      classNames={{
        starWrapper: "text-danger data-[checked=true]:text-primary",
        star: "size-8",
      }}
      defaultValue={3}
    />
  );
};
