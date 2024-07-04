import { cn } from "@/lib/utils";
import type { HTMLProps } from "react";

export const Spinner = ({ className, ...rest }: HTMLProps<HTMLDivElement>) => {
  const spinnerClass = cn(
    "size-4 animate-spin rounded-full border-2 border-current border-t-transparent",
    className,
  );

  return <div className={spinnerClass} {...rest} />;
};
