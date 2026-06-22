import { Meter as MeterPrimitive } from "@base-ui/react/meter";

import { meterStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type MeterVariantProps = VariantProps<typeof meterStyles>;

export const MeterRoot = (props: Meter.Props) => {
  const { className, ...restProps } = props;
  const styles = meterStyles();
  return (
    <MeterPrimitive.Root
      {...restProps}
      className={styles.root({
        className: cn(className),
      })}
    />
  );
};

export namespace Meter {
  export interface Props extends MeterPrimitive.Root.Props, MeterVariantProps {}
}

export const MeterLabel = (props: MeterPrimitive.Label.Props) => {
  const { className, ...restProps } = props;
  const styles = meterStyles();
  return (
    <MeterPrimitive.Label
      {...restProps}
      className={styles.label({ className: cn(className) })}
    />
  );
};

export const MeterValue = (props: MeterPrimitive.Value.Props) => {
  const { className, ...restProps } = props;
  const styles = meterStyles();
  return (
    <MeterPrimitive.Value
      {...restProps}
      className={styles.value({ className: cn(className) })}
    />
  );
};

export const MeterTrack = (props: MeterPrimitive.Track.Props) => {
  const { className, ...restProps } = props;
  const styles = meterStyles();
  return (
    <MeterPrimitive.Track
      {...restProps}
      className={styles.track({ className: cn(className) })}
    />
  );
};

export const MeterIndicator = (props: MeterPrimitive.Indicator.Props) => {
  const { className, ...restProps } = props;
  const styles = meterStyles();
  return (
    <MeterPrimitive.Indicator
      {...restProps}
      className={styles.indicator({ className: cn(className) })}
    />
  );
};
