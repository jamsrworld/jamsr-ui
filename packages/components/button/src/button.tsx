import { cn } from "@jamsr-ui/utils";
import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button">;

export const Button = (props: Props) => {
  const { className, ...restProps } = props;
  return (
    <button
      type="button"
      className={cn("bg-blue-50", className)}
      {...restProps}
    >
      Button
    </button>
  );
};
