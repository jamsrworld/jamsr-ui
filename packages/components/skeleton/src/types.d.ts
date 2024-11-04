import { type SkeletonProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    skeleton?: Partial<SkeletonProps>;
  }
}
