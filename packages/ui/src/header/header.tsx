"use client";

import { useRender } from "@base-ui/react/use-render";

import { headerStyles } from "./styles";

export const Header = (props: Header.Props) => {
  const { isBorder: _isBorder, className, render, ...rest } = props;
  const styles = headerStyles({ className });
  const renderElement = useRender({
    defaultTagName: "header",
    props: {
      ...rest,
      className: styles,
    },
    render,
  });
  return renderElement;
};

export namespace Header {
  export interface Props extends useRender.ComponentProps<"header"> {
    isBorder?: boolean;
  }
}
