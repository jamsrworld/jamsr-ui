import React from "react";

type Props = {
  when: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

export const Show = (props: Props) => {
  const { when, fallback, children } = props;
  if (when === true) return children;
  return fallback;
};
