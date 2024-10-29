import { RatingDefault } from "./default";

export const RatingInvalid = () => {
  return (
    <RatingDefault
      helperText="Rating is required"
      isInvalid
    />
  );
};
