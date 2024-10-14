"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = async () => import("./features").then((res) => res.domMax);

type Props = { children: React.ReactNode };
export const FramerMotionProvider = ({ children }: Props) => {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
};
