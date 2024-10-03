"use client";

import { UIProvider } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  return <UIProvider>{children}</UIProvider>;
};
