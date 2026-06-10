"use client";

import { createContext, use, useMemo } from "react";

import { useRender } from "@base-ui/react/use-render";

import { cardStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type CardVariants = VariantProps<typeof cardStyles>;

const CardContext = createContext<{
  styles: ReturnType<typeof cardStyles>;
} | null>(null);

const useCardContext = () => {
  const ctx = use(CardContext);
  if (!ctx) {
    throw new Error("useCardContext must be used within a Card");
  }
  return ctx;
};

export const Card = (props: Card.Props) => {
  const {
    bg,
    isBordered,
    isElevated,
    radius,
    className,
    render,
    ...restProps
  } = props;
  const styles = cardStyles({ bg, isBordered, isElevated, radius });
  const value = useMemo(() => ({ styles }), [styles]);

  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...restProps,
      className: styles.root({ className }),
    },
    render,
  });

  return <CardContext value={value}>{renderElement}</CardContext>;
};

export namespace Card {
  export interface Props
    extends useRender.ComponentProps<"div">, CardVariants {}
}

export const CardHeader = (props: CardHeader.Props) => {
  const { className, render, ...rest } = props;
  const { styles } = useCardContext();
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.header({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace CardHeader {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const CardTitle = (props: CardTitle.Props) => {
  const { className, render, ...rest } = props;
  const { styles } = useCardContext();
  const renderElement = useRender({
    defaultTagName: "h3",
    props: {
      ...rest,
      className: styles.title({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace CardTitle {
  export interface Props extends useRender.ComponentProps<"h3"> {}
}

export const CardDescription = (props: CardDescription.Props) => {
  const { className, render, ...rest } = props;
  const { styles } = useCardContext();
  const renderElement = useRender({
    defaultTagName: "p",
    props: {
      ...rest,
      className: styles.description({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace CardDescription {
  export interface Props extends useRender.ComponentProps<"p"> {}
}

export const CardContent = (props: CardContent.Props) => {
  const { className, render, ...rest } = props;
  const { styles } = useCardContext();
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.content({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace CardContent {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const CardFooter = (props: CardFooter.Props) => {
  const { className, render, ...rest } = props;
  const { styles } = useCardContext();
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.footer({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace CardFooter {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
