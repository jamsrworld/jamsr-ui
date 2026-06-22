"use client";

import { useRender } from "@base-ui/react/use-render";

import { ratingStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type RatingVariants = VariantProps<typeof ratingStyles>;

export const Rating = (props: Rating.Props) => {
  const { size, isReadOnly, className, render, ...rest } = props;
  const styles = ratingStyles({ size, isReadOnly });
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.root({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace Rating {
  export interface Props
    extends Omit<useRender.ComponentProps<"div">, "size">, RatingVariants {}
}
