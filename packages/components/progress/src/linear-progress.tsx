import { cn, type VariantProps } from "@jamsr-ui/utils";
import { m } from "framer-motion";
import { type ComponentPropsWithoutRef } from "react";
import { linearProgressVariants } from "./style";

export type LinearProgressProps = VariantProps<typeof linearProgressVariants> &
  ComponentPropsWithoutRef<"div"> &
  (
    | {
        progress: number;
        isIntermediate?: boolean;
      }
    | {
        isIntermediate: boolean;
        progress?: number;
      }
  );

export const LinearProgress = (props: LinearProgressProps) => {
  const { progress, size, color, isIntermediate, className, ...restProps } =
    props;
  const { bar, wrapper } = linearProgressVariants({
    size,
    color,
  });
  return (
    <div
      data-component="linear-progress"
      className={cn(wrapper({}), className)}
      {...restProps}
    >
      {isIntermediate ? (
        <div className={cn(bar(), "animate-progress")} />
      ) : (
        // @ts-ignore
        <m.div
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
