import { cn } from "@jamsr-ui/utils";
import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

const sum = (a: number) => a;
console.log(sum("a"));

export const Button = (props: Props) => {
  const { className, ...restProps } = props;
  return (
    <div
      className={cn("bg-blue-50", className)}
      {...restProps}
    >
      Button
    </div>
  );
};
