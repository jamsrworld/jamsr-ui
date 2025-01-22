import { type ComponentProps } from "react";

export type As<Props = any> = React.ElementType<Props>;
export type PropsOf<T extends As> = React.ComponentPropsWithRef<T> & {
  as?: As;
};

export type UIProps<
  T extends As = "div",
  MergedKeys extends object = object,
  OmitKeys extends object = object,
> = Omit<
  PropsOf<T>,
  | "ref"
  | "color"
  | "slot"
  | "size"
  | "defaultChecked"
  | "defaultValue"
  | keyof MergedKeys
  | keyof OmitKeys
> &
  MergedKeys;

export type ComponentPropsWithAs<
  T extends React.ElementType,
  Y = NonNullable<unknown>,
> = Y & {
  as?: T;
} & Omit<React.ComponentProps<T>, "as" | "color" | keyof Y>;


export type PropGetter<P = Record<string, unknown>> = (props?: P) => P;

export const formLabelProps = () => {
  const onMouseDown = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const onPointerDown = (e: React.PointerEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  return { onMouseDown, onPointerDown } satisfies ComponentProps<"label">;
};
