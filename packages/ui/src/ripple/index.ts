// Ripple is mostly a visual effect component, re-export from base
import { Ripple as RippleRoot } from "@jamsrui/react";

export const Ripple = RippleRoot;

export namespace Ripple {
  export interface Props extends React.ComponentProps<typeof RippleRoot> {}
  export type Variants = {
    isCentered?: boolean;
  };
}
