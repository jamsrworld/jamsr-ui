import {
  Slider as SliderRoot,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "./slider";

import type { VariantProps } from "tailwind-variants";

import type { sliderStyles } from "./styles";

export const Slider = Object.assign(SliderRoot, {
  Root: SliderRoot,
  Control: SliderControl,
  Track: SliderTrack,
  Indicator: SliderIndicator,
  Thumb: SliderThumb,
  Value: SliderValue,
});

export namespace Slider {
  export type Variants = VariantProps<typeof sliderStyles>;
  export interface Props extends SliderRoot.Props {}
}
