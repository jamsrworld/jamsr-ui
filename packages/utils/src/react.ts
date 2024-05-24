/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import {
  type As,
  type InternalForwardRefRenderFunction,
  type PropsOf,
  type RightJoinProps,
} from "./component";

export function forwardRefUI<
  Component extends As,
  Props extends object,
  OmitKeys extends keyof any = never,
>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >,
) {
  return React.forwardRef(component) as InternalForwardRefRenderFunction<
    Component,
    Props,
    OmitKeys
  >;
}
