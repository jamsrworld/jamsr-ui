import { type RatingProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    rating?: Partial<RatingProps>;
  }
}
