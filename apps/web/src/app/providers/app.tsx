"use client";

import { ToastProvider, UIProvider, UIStylesProvider } from "@jamsr-ui/react";
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
      <UIStylesProvider
      // button={{
      //   className: "",
      //   color: "danger",
      //   size: "lg",
      //   variant: "outlined",
      //   onClick: () => {
      //     console.log("first click");
      //   },
      // }}
      >
        {children}
      </UIStylesProvider>
    </UIProvider>
  );
};
