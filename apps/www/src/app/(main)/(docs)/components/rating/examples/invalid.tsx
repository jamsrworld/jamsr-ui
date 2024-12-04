import { RatingUsage } from "./usage";

export const RatingInvalid = () => {
  return (
    <RatingUsage
      helperText="Rating is required"
      isInvalid
    />
  );
};
