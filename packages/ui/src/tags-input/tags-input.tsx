"use client";

import { useRender } from "@base-ui/react/use-render";

import { tagsInputStyles } from "./styles";

export const TagsInput = (props: TagsInput.Props) => {
  const { className, render, ...rest } = props;
  const styles = tagsInputStyles();
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

export namespace TagsInput {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
