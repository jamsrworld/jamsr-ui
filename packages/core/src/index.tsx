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

export const UIProvider = (props: Props) => {
  const { children } = props;
  return <FramerMotionProvider>{children}</FramerMotionProvider>;
};
