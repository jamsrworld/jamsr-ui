"use client";

import { UIProvider } from "@jamsr-ui/core";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const { children } = props;
  // TODO: fix with ui provide
  return <UIProvider>{children}</UIProvider>;
  // return <FramerMotionProvider>{children}</FramerMotionProvider>;
};
