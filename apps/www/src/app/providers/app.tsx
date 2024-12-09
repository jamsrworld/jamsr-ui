"use client";

import {
  Confirmation,
  ToastProvider,
  UIProvider,
  UIStylesProvider,
} from "@jamsr-ui/react";
import { Analytics } from "@vercel/analytics/react";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  return (
    <UIProvider>
      <Analytics />
      <ToastProvider />
      <Confirmation />
      <UIStylesProvider
        globalConfig={{
          // radius: "lg",
        }}
      >
        {children}
      </UIStylesProvider>
    </UIProvider>
  );
};
