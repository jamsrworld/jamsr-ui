"use client";

import { useRender } from "@base-ui/react/use-render";

import { linkStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type LinkVariantProps = VariantProps<typeof linkStyles>;

export const Link = (props: Link.Props) => {
  const { className, underline, variant, render, ...restProps } = props;
  const styles = linkStyles({ underline, variant, className });
  const renderElement = useRender({
    defaultTagName: "a",
    props: {
      ...restProps,
      "data-component": "link",
      className: styles,
    },
    render,
  });
  return renderElement;
};

export namespace Link {
  export interface Props
    extends useRender.ComponentProps<"a">, LinkVariantProps {}
}
