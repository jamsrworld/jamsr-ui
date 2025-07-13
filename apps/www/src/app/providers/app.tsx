"use client";

import {
  Confirmation,
  ToastProvider,
  UIConfigProvider,
  UIProvider,
} from "@jamsr-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  const [queryClient] = useState(new QueryClient());
  return (
    <UIProvider>
      <Analytics />
      <ToastProvider />
      <Confirmation />
      <UIConfigProvider globalConfig={{ radius: "xl" }}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </UIConfigProvider>
    </UIProvider>
  );
};
