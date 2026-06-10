"use client";

import { dateFieldStyles } from "./styles";

import type { useRender } from "@base-ui/react/use-render";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = dateFieldStyles();

export const DateField = (_props: DateField.Props) => {
  return null;
};

export namespace DateField {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const DateInput = (_props: DateInput.Props) => {
  return null;
};

export namespace DateInput {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const DateSegment = (_props: DateSegment.Props) => {
  return null;
};

export namespace DateSegment {
  export interface Props extends useRender.ComponentProps<"div"> {
    segment?: unknown;
  }
}

export const DateFieldSeparator = (_props: DateFieldSeparator.Props) => {
  return null;
};

export namespace DateFieldSeparator {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
