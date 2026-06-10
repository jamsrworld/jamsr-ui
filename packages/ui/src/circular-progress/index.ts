import {
  CircularProgress as CircularProgressRoot,
  CircularProgressLabel,
  CircularProgressProgress,
  CircularProgressTrack,
} from "./circular-progress";

import type { VariantProps } from "tailwind-variants";

import type { circularProgressStyles } from "./styles";

export const CircularProgress = Object.assign(CircularProgressRoot, {
  Label: CircularProgressLabel,
  Track: CircularProgressTrack,
  Progress: CircularProgressProgress,
});

export namespace CircularProgress {
  export type Variants = VariantProps<typeof circularProgressStyles>;
  export interface Props extends CircularProgressRoot.Props {}
  export interface Label extends CircularProgressLabel.Props {}
  export interface Track extends CircularProgressTrack.Props {}
  export interface Progress extends CircularProgressProgress.Props {}
}
