import { createContext } from "@jamsr-ui/utils";
import { type useRating } from "./use-rating";

type ContextType = Pick<
  ReturnType<typeof useRating>,
  "styles" | "isDisabled" | "isReadonly" | "classNames"
>;

export const [RatingProvider, useRatingContext] = createContext<ContextType>({
  name: "RatingContext",
  strict: false,
  errorMessage: "useRatingContext must be used within a Rating",
});
