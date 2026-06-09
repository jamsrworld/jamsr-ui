import type { VariantProps } from "tailwind-variants";
import { timeFieldStyles } from "./styles";
import {
  TimeField as TimeFieldRoot,
  TimeFieldSeparator,
  TimeInput,
  TimeSegment,
} from "./time-field";

export const TimeField = Object.assign(TimeFieldRoot, {
  Input: TimeInput,
  Segment: TimeSegment,
  Separator: TimeFieldSeparator,
});

export namespace TimeField {
  export type Variants = VariantProps<typeof timeFieldStyles>;
  export interface Props extends TimeFieldRoot.Props {}
  export interface Input extends TimeInput.Props {}
  export interface Segment extends TimeSegment.Props {}
  export interface Separator extends TimeFieldSeparator.Props {}
}

export { TimeFieldSeparator, TimeInput, TimeSegment };
