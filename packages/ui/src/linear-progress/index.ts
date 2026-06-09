import type { VariantProps } from "tailwind-variants";
import { linearProgressStyles } from "./styles";
import {
  LinearProgress as LinearProgressRoot,
  LinearProgressBar,
} from "./linear-progress";

export const LinearProgress = Object.assign(LinearProgressRoot, {
  Bar: LinearProgressBar,
});

export namespace LinearProgress {
  export type Variants = VariantProps<typeof linearProgressStyles>;
  export interface Props extends LinearProgressRoot.Props {}
  export interface Bar extends LinearProgressBar.Props {}
}
