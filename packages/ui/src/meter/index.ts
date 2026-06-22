import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from "./meter";

import type { Meter as MeterNamespace } from "./meter";

export const Meter = Object.assign(MeterRoot, {
  Label: MeterLabel,
  Value: MeterValue,
  Track: MeterTrack,
  Indicator: MeterIndicator,
});

export namespace Meter {
  export interface Props extends MeterNamespace.Props {}
}
