import { cn } from "@jamsr-ui/utils";
import { m } from "framer-motion";
import { type ComponentProps } from "react";
import { type LinearProgressVariants, linearProgressVariants } from "./style";

export type LinearProgressProps = LinearProgressVariants &
  ComponentProps<"div"> & {
    progress?: number;
    isIntermediate?: boolean;
  };

export const LinearProgress = (props: LinearProgressProps) => {
  const {
    progress: progressProp = -1,
    size,
    color,
    isIntermediate = true,
    className,
    ...restProps
  } = props;
  const { bar, track } = linearProgressVariants({
    size,
    color,
  });
  const progress = Math.min(100, progressProp);
  return (
    <div
      data-component="linear-progress"
      data-slot="track"
      className={cn(track({}), className)}
      {...restProps}
    >
      {isIntermediate && progress < 0 ? (
        <div data-slot="bar" className={cn(bar(), "animate-progress")} />
      ) : (
        <m.div
          data-slot="bar"
          className={bar()}
          initial={{
            width: 0,
          }}
          animate={{
            width: `${progress}%`,
          }}
        />
      )}
    </div>
  );
};
