"use client";

import { Divider } from "@jamsr-ui/divider";
import { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useScroll } from "framer-motion";
import { useState } from "react";
import { useHeader, type UseHeaderProps } from "./use-header";

export type HeaderProps = UseHeaderProps;

export const Header = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, HeaderProps>,
) => {
  const { Component, getBaseProps, children, showDivider, showDividerDefault } =
    useHeader(props);
  const { scrollY } = useScroll();

  const [hasScrolled, setHasScrolled] = useState(false);
  scrollY.on("change", (val) => {
    if (val > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <Component
      data-component="header"
      data-state={hasScrolled ? "active" : "inactive"}
      {...getBaseProps()}
    >
      {children}
      {(showDividerDefault || (showDivider && hasScrolled)) && (
        <Divider className="absolute bottom-0 left-0 w-full" />
      )}
    </Component>
  );
};
