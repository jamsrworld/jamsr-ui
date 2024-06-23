import { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useSkeleton, type UseSkeletonProps } from "./use-skeleton";

export type SkeletonProps = UseSkeletonProps;

export const Skeleton = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, SkeletonProps>,
) => {
  const { Component, children, getSkeletonProps, getContentProps } =
    useSkeleton({ ...props });

  return (
    <Component
      data-component="skeleton"
      {...getSkeletonProps()}
    >
      <div {...getContentProps()}>{children}</div>
    </Component>
  );
};
