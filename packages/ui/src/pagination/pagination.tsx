"use client";

import { useRender } from "@base-ui/react/use-render";

import { paginationStyles } from "./styles";

const styles = paginationStyles();

export const PaginationItem = (props: PaginationItem.Props) => {
  const { isActive, className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "button",
    props: {
      ...rest,
      className: paginationStyles({ isActive }).item({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace PaginationItem {
  export interface Props extends useRender.ComponentProps<"button"> {
    isActive?: boolean;
  }
}

export const PaginationEllipsis = (props: PaginationEllipsis.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "span",
    props: {
      ...rest,
      className: styles.ellipsis({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace PaginationEllipsis {
  export interface Props extends useRender.ComponentProps<"span"> {}
}

export const Pagination = (props: Pagination.Props) => {
  const { className, render, ...rest } = props;
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

export namespace Pagination {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
