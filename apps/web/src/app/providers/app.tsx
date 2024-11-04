"use client";

import { ToastProvider, UIProvider } from "@jamsr-ui/react";
import { UIStylesProvider } from "@jamsr-ui/styles";
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
      // input={{
      //   className: "shadow-lg",
      //   classNames: {
      //     label: "text-red-500",
      //   },
      //   variant: "outlined",
      // }}
      // card={{
      //   className: "!bg-red-500",
      // }}
      // cardHeader={{
      //   className: "bg-gray-500",
      // }}
      >
        {children}
      </UIStylesProvider>
    </UIProvider>
  );
};
