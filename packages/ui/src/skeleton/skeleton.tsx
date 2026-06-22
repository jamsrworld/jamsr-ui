"use client";

import { useRender } from "@base-ui/react/use-render";

import { skeletonStyles } from "./styles";
import { dataAttr } from "../utils/attr";

import type { VariantProps } from "tailwind-variants";

type SkeletonVariants = VariantProps<typeof skeletonStyles>;

export const Skeleton = (props: Skeleton.Props) => {
  const {
    disableAnimation,
    className,
    children,
    isLoading = true,
    render,
    ...restProps
  } = props;
  const styles = skeletonStyles({ disableAnimation });

  const renderContent = (
    <div className={styles.content()} data-slot="content">
      {children}
    </div>
  );

  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...restProps,
      "data-component": "skeleton",
      "data-slot": "root",
      "data-loaded": dataAttr(!isLoading),
      className: styles.root({ className }),
      children: renderContent,
    },
    render,
  });

  return renderElement;
};

export namespace Skeleton {
  export interface Props
    extends useRender.ComponentProps<"div">, SkeletonVariants {
    isLoading?: boolean;
  }
}
