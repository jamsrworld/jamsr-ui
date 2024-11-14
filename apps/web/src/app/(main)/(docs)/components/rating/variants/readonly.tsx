import { RatingDefault } from "./default";

export const RatingReadonly = () => {
  return (
    <RatingDefault
      isReadonly
      defaultValue={5}
    />
  );
};
