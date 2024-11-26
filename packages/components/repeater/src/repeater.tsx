import React, { Fragment } from "react";

type Props = {
  repeat: number;
  children:
    | ((_: { position: number; index: number }) => React.ReactNode)
    | React.ReactNode;
};

export const Repeater = (props: Props) => {
  const { repeat, children } = props;
  const items = Array.from({ length: repeat }).fill(null);
  return items.map((_, index) => (
    <Fragment key={index}>
      {typeof children === "function"
        ? children({ position: index + 1, index: index })
        : children}
    </Fragment>
  ));
};
