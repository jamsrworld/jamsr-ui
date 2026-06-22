"use client";

import { useRender } from "@base-ui/react/use-render";

import { descriptionStyles } from "./styles";
import { cn } from "../utils/cn";

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
