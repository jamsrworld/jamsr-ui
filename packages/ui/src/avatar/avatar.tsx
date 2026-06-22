"use client";

import { createContext, use, useMemo } from "react";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { avatarStyles } from "./styles";
import { cn } from "../utils/cn";

import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

type AvatarVariants = VariantProps<typeof avatarStyles>;

const AvatarContext = createContext<{
  styles: ReturnType<typeof avatarStyles>;
} | null>(null);

const useAvatarContext = () => {
  const ctx = use(AvatarContext);
  if (!ctx) {
    throw new Error("useAvatarContext must be used within an Avatar");
  }
  return ctx;
};

export const Avatar = (props: Avatar.Props) => {
  const { size, color, isBordered, radius, className, ...restProps } = props;
  const styles = avatarStyles({ size, color, isBordered, radius });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <AvatarContext value={value}>
      <AvatarPrimitive.Root
        {...restProps}
        className={styles.root({ className: cn(className) })}
      />
    </AvatarContext>
  );
};

export namespace Avatar {
  export interface Props extends AvatarPrimitive.Root.Props, AvatarVariants {}
}

export const AvatarImage = (props: AvatarPrimitive.Image.Props) => {
  const { styles } = useAvatarContext();
  return (
    <AvatarPrimitive.Image
      {...props}
      className={styles.img({ className: cn(props.className) })}
    />
  );
};

export const AvatarFallback = (props: AvatarPrimitive.Fallback.Props) => {
  const { styles } = useAvatarContext();
  const { children = <AvatarIcon />, className, ...restProps } = props;
  return (
    <AvatarPrimitive.Fallback
      {...restProps}
      className={styles.fallback({ className: cn(className) })}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
};

export const AvatarIndicator = (props: AvatarIndicator.Props) => {
  const { styles } = useAvatarContext();
  return (
    <div
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export namespace AvatarIndicator {
  export interface Props extends ComponentProps<"div"> {}
}

const AvatarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    viewBox="0 0 24 24"
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 14H11C7.13401 14 4 17.134 4 21H20C20 17.134 16.866 14 13 14Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <circle
      cx={12}
      cy={7}
      r={4}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);
