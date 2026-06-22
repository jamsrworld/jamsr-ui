"use client";

import { useRender } from "@base-ui/react/use-render";

import { datePickerStyles } from "./styles";

export const DatePicker = (props: DatePicker.Props) => {
  const { className, render, ...rest } = props;
  const styles = datePickerStyles();
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

export namespace DatePicker {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
