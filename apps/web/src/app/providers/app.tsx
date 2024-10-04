"use client";

import { UIProvider } from "@jamsr-ui/core";
import {} from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  // TODO: fix with ui provide
  return <UIProvider>{children}</UIProvider>;
};
