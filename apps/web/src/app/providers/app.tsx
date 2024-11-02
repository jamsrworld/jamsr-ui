"use client";

import { UIProvider, UIStyleProvider } from "@jamsr-ui/core";
import { ToastProvider } from "@jamsr-ui/react";
import type { UIStyleType } from "@jamsr-ui/types";

type Props = {
  children: React.ReactNode;
};

declare module "@jamsr-ui/core" {
  export interface UIStyleContextType extends UIStyleType {}
}

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
