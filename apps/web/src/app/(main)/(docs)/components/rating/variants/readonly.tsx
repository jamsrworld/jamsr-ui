import { RatingUsage } from "./usage";

export const RatingReadonly = () => {
  return (
    <RatingUsage
      isReadonly
      defaultValue={5}
    />
  );
};
