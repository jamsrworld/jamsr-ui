"use client";

import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  return (
    <button
      className={`border bg-black rounded-lg px-4 py-2 text-white border-gray-500 ring-2 ring-pink-400 ${className}`}
      onClick={() => alert(`Hello from your  app!`)}
      {...rest}
    >
      {children}
    </button>
  );
};
