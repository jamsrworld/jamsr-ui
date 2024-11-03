import { type SkeletonProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    skeleton?: Pick<SkeletonProps, "className" | "classNames">;
  }
}
