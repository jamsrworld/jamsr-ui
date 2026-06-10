"use client";

import { useRender } from "@base-ui/react/use-render";
import { cn } from "tailwind-variants";

import { descriptionStyles } from "./styles";

export const Description = (props: Description.Props) => {
  const { className, render, ...restProps } = props;

  const descProps = {
    className: cn(descriptionStyles(), className),
    ...restProps,
  };

  const renderElement = useRender({
    defaultTagName: "p",
    props: descProps,
    render,
  });
  return renderElement;
};

export namespace Description {
  export interface Props extends useRender.ComponentProps<"p"> {}
}
