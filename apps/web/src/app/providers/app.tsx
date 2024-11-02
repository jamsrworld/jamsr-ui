"use client";

import { UIProvider, UIStyleProvider } from "@jamsr-ui/core";
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
      <UIStyleProvider
      // input={{
      //   classNames: {
      //     label: "text-white",
      //   },
      // }}
      // card={{
      //   className: "!bg-red-500",
      // }}
      // cardHeader={{
      //   className: "bg-gray-500",
      // }}
      >
        {children}
      </UIStyleProvider>
    </UIProvider>
  );
};
