"use client";

import { cn } from "@jamsrworld/utils";
import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button = ({ children, className = "", ...rest }: ButtonProps) => (
  <button
    type="button"
    className={cn(
      `rounded-lg border border-gray-500 bg-black px-4 py-2 text-pink-50 ring-2 ring-pink-400`,
      className,
    )}
    {...rest}
  >
    {children}
  </button>
);
