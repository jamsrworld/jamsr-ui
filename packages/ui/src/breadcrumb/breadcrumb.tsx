import { useRender } from "@base-ui/react/use-render";

import { breadcrumbStyles } from "./styles";

const styles = breadcrumbStyles();

export const BreadcrumbItem = (props: BreadcrumbItem.Props) => {
  const { isCurrent, className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: isCurrent
        ? styles.current({ className })
        : styles.item({ className }),
    },
    render,
  });
  return renderElement;
};

export const BreadcrumbSeparator = (props: BreadcrumbSeparator.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.separator({ className }),
    },
    render,
  });
  return renderElement;
};

export const Breadcrumb = (props: Breadcrumb.Props) => {
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

export namespace Breadcrumb {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export namespace BreadcrumbItem {
  export interface Props extends useRender.ComponentProps<"div"> {
    isCurrent?: boolean;
  }
}

export namespace BreadcrumbSeparator {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
