import { Skeleton as SkeletonUI } from "@jamsrui/react";

import { skeletonStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type SkeletonVariants = VariantProps<typeof skeletonStyles>;

const SkeletonContent = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const styles = skeletonStyles();
  return (
    <div className={styles.content({ className: props.className })}>
      {props.children}
    </div>
  );
};

export const Skeleton = (props: Skeleton.Props) => {
  const { disableAnimation, className, children, isLoading, ...restProps } =
    props;
  const styles = skeletonStyles({ disableAnimation });

  return (
    <SkeletonUI
      {...restProps}
      className={styles.root({ className })}
      isLoading={isLoading}
    >
      <SkeletonContent>{children}</SkeletonContent>
    </SkeletonUI>
  );
};

export namespace Skeleton {
  export interface Props extends SkeletonUI.Props, SkeletonVariants {}
}
