"use client";

import { useRender } from "@base-ui/react/use-render";

import { labelStyles } from "./styles";
import { cn } from "../utils/cn";

export const Label = (props: Label.Props) => {
  const { className, render, ...restProps } = props;

  const labelProps = {
    className: cn(labelStyles(), className),
    ...restProps,
  };

  const renderElement = useRender({
    defaultTagName: "label",
    props: labelProps,
    render,
  });
  return renderElement;
};

export namespace Label {
  export interface Props extends useRender.ComponentProps<"label"> {}
}
