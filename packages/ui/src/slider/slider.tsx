"use client";

import { createContext, use, useMemo } from "react";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { sliderStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type SliderVariants = VariantProps<typeof sliderStyles>;

const SliderContext = createContext<{
  styles: ReturnType<typeof sliderStyles>;
} | null>(null);

const useSliderContext = () => {
  const ctx = use(SliderContext);
  if (!ctx) {
    throw new Error("useSliderContext must be used within a Slider");
  }
  return ctx;
};

export const Slider = (props: Slider.Props) => {
  const { orientation, className, ...rest } = props;
  const styles = sliderStyles({ orientation });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <SliderContext value={value}>
      <SliderPrimitive.Root
        {...rest}
        className={styles.root({ className: cn(className) })}
        orientation={orientation}
      />
    </SliderContext>
  );
};

export namespace Slider {
  export interface Props extends SliderPrimitive.Root.Props, SliderVariants {}
}

export const SliderControl = (props: SliderPrimitive.Control.Props) => {
  const { styles } = useSliderContext();
  return (
    <SliderPrimitive.Control
      {...props}
      className={styles.control({ className: cn(props.className) })}
    />
  );
};

export const SliderTrack = (props: SliderPrimitive.Track.Props) => {
  const { styles } = useSliderContext();
  return (
    <SliderPrimitive.Track
      {...props}
      className={styles.track({ className: cn(props.className) })}
    />
  );
};

export const SliderIndicator = (props: SliderPrimitive.Indicator.Props) => {
  const { styles } = useSliderContext();
  return (
    <SliderPrimitive.Indicator
      {...props}
      className={styles.indicator({ className: cn(props.className) })}
    />
  );
};

export const SliderThumb = (props: SliderPrimitive.Thumb.Props) => {
  const { styles } = useSliderContext();
  return (
    <SliderPrimitive.Thumb
      {...props}
      className={styles.thumb({ className: cn(props.className) })}
    />
  );
};

export const SliderValue = (props: SliderPrimitive.Value.Props) => {
  const { styles } = useSliderContext();
  return (
    <SliderPrimitive.Value
      {...props}
      className={styles.value({ className: cn(props.className) })}
    />
  );
};
