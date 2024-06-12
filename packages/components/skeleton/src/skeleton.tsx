import { forwardRefUI } from "@jamsr-ui/utils";
import { useSkeleton, type UseSkeletonProps } from "./use-skeleton";

export type SkeletonProps = UseSkeletonProps;

export const Skeleton = forwardRefUI<"div", SkeletonProps>((props, ref) => {
  const { Component, children, getSkeletonProps, getContentProps } =
    useSkeleton({ ...props });

  return (
    <Component
      data-component="skeleton"
      ref={ref}
      {...getSkeletonProps()}
    >
      <div {...getContentProps()}>{children}</div>
    </Component>
  );
});

Skeleton.displayName = "UI.Skeleton";
