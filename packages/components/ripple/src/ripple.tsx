import { cn } from "@jamsr-ui/utils";
import { useRef } from "react";
import { useRipple, type UseRippleOptions } from "./use-ripple";

type Props = {
  className?: string;
  classNames?: {
    base?: string;
    ripple?: string;
  };
} & UseRippleOptions;

export const Ripple = (props: Props) => {
  const { className, isCenter, classNames } = props;
  const ref = useRef<HTMLSpanElement>(null);
  const ripples = useRipple(ref, {
    isCenter,
  });
  return (
    <span
      data-component="ripple"
      className={cn(
        "absolute inset-0 size-full overflow-hidden rounded-inherit",
        className,
        classNames?.base,
      )}
      ref={ref}
    >
      {ripples?.map((style, i) => {
        return (
          <span
            key={i}
            className={cn(
              "absolute origin-center scale-0 animate-ripple rounded-full bg-current opacity-15",
              classNames?.ripple,
            )}
            style={{
              ...style,
            }}
          />
        );
      })}
    </span>
  );
};
