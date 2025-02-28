import { type SkeletonProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    skeleton?: Partial<SkeletonProps>;
  }
}
