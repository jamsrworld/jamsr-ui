import { type RatingProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    rating?: Partial<RatingProps>;
  }
}
