"use client";

import { LazyMotion } from "motion/react";

const loadFeatures = async () => import("./features").then((res) => res.domMax);

type Props = { children: React.ReactNode };
export const FramerMotionProvider = ({ children }: Props) => {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
};
