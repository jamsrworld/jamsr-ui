import {
  LinearProgress as LinearProgressRoot,
  LinearProgressBar,
} from "./linear-progress";

import type { VariantProps } from "tailwind-variants";

import type { linearProgressStyles } from "./styles";

export const LinearProgress = Object.assign(LinearProgressRoot, {
  Bar: LinearProgressBar,
});

export namespace LinearProgress {
  export type Variants = VariantProps<typeof linearProgressStyles>;
  export interface Props extends LinearProgressRoot.Props {}
  export interface Bar extends LinearProgressBar.Props {}
}
