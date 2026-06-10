"use client";

import type { useRender } from "@base-ui/react/use-render";
import type { ReactNode } from "react";

export const TimeField = (_props: TimeField.Props) => {
  return null;
};

export namespace TimeField {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const TimeInput = ({
  as: _as = "div",
  children: _children,
  className: _className,
  ..._restProps
}: TimeInput.Props) => {
  return null;
};

export namespace TimeInput {
  export interface Props extends Omit<
    useRender.ComponentProps<"div">,
    "children"
  > {
    as?: keyof React.JSX.IntrinsicElements;
    children?: ReactNode | ((segment: unknown) => ReactNode);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useTimeSegment = (_segment: unknown) => {
  return null;
};

export const TimeSegment = ({
  segment: _segment,
  className: _className,
  ..._restProps
}: TimeSegment.Props) => {
  return null;
};

export namespace TimeSegment {
  export interface Props extends useRender.ComponentProps<"div"> {
    segment?: unknown;
  }
}

export const TimeFieldSeparator = ({
  className: _className,
  ..._restProps
}: TimeFieldSeparator.Props) => {
  return null;
};

export namespace TimeFieldSeparator {
  export interface Props extends useRender.ComponentProps<"span"> {}
}
