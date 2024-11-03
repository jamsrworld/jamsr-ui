"use client";

import { ToastProvider, UIProvider } from "@jamsr-ui/react";
import { UIStylesProvider } from "@jamsr-ui/styles";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  return (
    <UIProvider>
      <ToastProvider />
      <UIStylesProvider
        input={{
          classNames: {
            label: "text-white",
          },
        }}
        card={{
          className: "!bg-red-500",
        }}
        cardHeader={{
          className: "bg-gray-500",
        }}
      >
        {children}
      </UIStylesProvider>
    </UIProvider>
  );
};
