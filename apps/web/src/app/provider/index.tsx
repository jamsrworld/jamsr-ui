"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toast } from "ui/toast";
import { useState } from "react";
import { ToastList, toastManager } from "./toast";

type Props = {
  children: React.ReactNode;
};

export const Providers = (props: Props) => {
  const { children } = props;
  const [queryClient] = useState(new QueryClient());
  return (
    <>
      <Toast.Provider toastManager={toastManager}>
        <Toast.Portal>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
          <Toast.Viewport>
            <ToastList />
          </Toast.Viewport>
        </Toast.Portal>
      </Toast.Provider>
    </>
  );
};
