"use client";

import { UIProvider } from "@jamsr-ui/core";
import {} from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  return <UIProvider>{children}</UIProvider>;
};
