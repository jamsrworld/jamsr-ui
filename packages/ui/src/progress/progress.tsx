import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { progressStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type ProgressVariantProps = VariantProps<typeof progressStyles>;

export const ProgressRoot = (props: Progress.Props) => {
  const { className, ...restProps } = props;
  const styles = progressStyles();
  return (
    <ProgressPrimitive.Root
      {...restProps}
      className={styles.root({
        className: cn(className),
      })}
    />
  );
};

export namespace Progress {
  export interface Props
    extends ProgressPrimitive.Root.Props, ProgressVariantProps {}
}

export const ProgressLabel = (props: ProgressPrimitive.Label.Props) => {
  const { className, ...restProps } = props;
  const styles = progressStyles();
  return (
    <ProgressPrimitive.Label
      {...restProps}
      className={styles.label({ className: cn(className) })}
    />
  );
};

export const ProgressValue = (props: ProgressPrimitive.Value.Props) => {
  const { className, ...restProps } = props;
  const styles = progressStyles();
  return (
    <ProgressPrimitive.Value
      {...restProps}
      className={styles.value({ className: cn(className) })}
    />
  );
};

export const ProgressTrack = (props: ProgressPrimitive.Track.Props) => {
  const { className, ...restProps } = props;
  const styles = progressStyles();
  return (
    <ProgressPrimitive.Track
      {...restProps}
      className={styles.track({ className: cn(className) })}
    />
  );
};

export const ProgressIndicator = (props: ProgressPrimitive.Indicator.Props) => {
  const { className, ...restProps } = props;
  const styles = progressStyles();
  return (
    <ProgressPrimitive.Indicator
      {...restProps}
      className={styles.indicator({ className: cn(className) })}
    />
  );
};
