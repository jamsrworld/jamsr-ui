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
      // tabs={{
      //   classNames: {
      //     base: "!bg-red-900",
      //   },
      // }}
      // tab={{
      //   className:"bg-blue-900"
      // }}
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
