import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from "./progress";

import type { Progress as ProgressNamespace } from "./progress";

export const Progress = Object.assign(ProgressRoot, {
  Label: ProgressLabel,
  Value: ProgressValue,
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
});

export namespace Progress {
  export interface Props extends ProgressNamespace.Props {}
}
