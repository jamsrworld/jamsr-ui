"use client";

import { useRender } from "@base-ui/react/use-render";

import { textStyles } from "./styles";

import type { TextVariants } from "./styles";

export const Text = (props: Text.Props) => {
  const { variant, leading, className, render, ...restProps } = props;
  const styles = textStyles({ variant, leading, className });

  const renderElement = useRender({
    defaultTagName: "p",
    props: {
      ...restProps,
      className: styles,
    },
    render,
  });
  return renderElement;
};

export namespace Text {
  export interface Props extends useRender.ComponentProps<"p">, TextVariants {}
}
