import React, { Fragment } from "react";

type Props = {
  count: number;
  children: ((idx: number) => React.ReactNode) | React.ReactNode;
};

export const Repeater = (props: Props) => {
  const { count, children } = props;
  const items = Array.from({ length: count }).fill(null);
  return items.map((_, idx) => (
    <Fragment key={idx}>
      {typeof children === "function" ? children(idx) : children}
    </Fragment>
  ));
};
