import { cn } from "@jamsr-ui/utils";
import { useRef } from "react";
import { useRipple, type UseRippleOptions } from "./use-ripple";

type Props = {
  className?: string;
} & UseRippleOptions;

export const Ripple = (props: Props) => {
  const { className, isCenter } = props;
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
      )}
      ref={ref}
    >
      {ripples?.map((style, i) => {
        return (
          <span
            key={i}
            className="absolute origin-center scale-0 animate-ripple rounded-full bg-black/5 opacity-75 dark:bg-white/5"
            style={{
              ...style,
            }}
          />
        );
      })}
    </span>
  );
};
