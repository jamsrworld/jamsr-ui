import React from "react";

type Props = {
  count: number;
  children: React.ReactNode;
};

export const Repeater = (props: Props) => {
  const { count, children } = props;
  return Array.from({ length: count }, () => children);
};