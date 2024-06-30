"use client";

import { Divider } from "@jamsr-ui/divider";
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { useHeader, type UseHeaderProps } from "./use-header";

export type HeaderProps = UseHeaderProps;

export const Header = (props: HeaderProps) => {
  const { getBaseProps, children, hideOnScroll, isBordered } = useHeader(props);
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const previous = scrollYProgress.getPrevious();
    const isScrollingUp = previous && previous > latest;

    if (hideOnScroll) {
      if (scrollYProgress.get() < 0.02) {
        setIsVisible(true);
      } else if (isScrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    
  });

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isVisible && (
        /* @ts-expect-error typeerror */
        <m.header
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          data-component="header"
          data-state={isVisible ? "active" : "inactive"}
          {...getBaseProps()}
        >
          {children}
          {isBordered && (
            <Divider className="absolute bottom-0 left-0 w-full" />
          )}
        </m.header>
      )}
    </AnimatePresence>
  );
};
