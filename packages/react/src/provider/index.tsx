"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = async () => import("./features").then((res) => res.domMax);

type Props = { children: React.ReactNode };

const FramerMotionProvider = ({ children }: Props) => {
  return (
    <LazyMotion
      strict
      features={loadFeatures}
    >
      {children}
    </LazyMotion>
  );
};

export const JamsrUIProvider = (props: Props) => {
  const { children } = props;
  return (
    <div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="dark"
      id="app"
    >
      <FramerMotionProvider>{children}</FramerMotionProvider>
    </div>
  );
};
