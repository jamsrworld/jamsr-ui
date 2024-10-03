"use client";

import { JamsrUIProvider } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  return <JamsrUIProvider>{children}</JamsrUIProvider>;
};
