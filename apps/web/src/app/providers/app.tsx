"use client";

import { UIProvider } from "@jamsr-ui/core";
import { ToastProvider } from "@jamsr-ui/react";
import {} from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  return (
    <UIProvider>
      <ToastProvider />
      {children}
    </UIProvider>
  );
};
