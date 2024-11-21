import React, { Fragment } from "react";

type Props = {
  count: number;
  children:
    | ((_: { count: number; index: number }) => React.ReactNode)
    | React.ReactNode;
};

export const Repeater = (props: Props) => {
  const { count, children } = props;
  const items = Array.from({ length: count }).fill(null);
  return items.map((_, index) => (
    <Fragment key={index}>
      {typeof children === "function"
        ? children({ count, index: index })
        : children}
    </Fragment>
  ));
};
