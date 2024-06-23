/* eslint-disable @typescript-eslint/no-explicit-any */

export type As<Props = any> = React.ElementType<Props>;
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};
export type UIProps<
  T extends As = "div",
  OmitKeys extends keyof any = never,
> = Omit<
  PropsOf<T>,
  | "ref"
  | "color"
  | "slot"
  | "size"
  | "defaultChecked"
  | "defaultValue"
  | OmitKeys
> & {
  as?: As;
};

type DataAttributes = Record<string, any>;
export interface DOMElement extends Element, HTMLOrSVGElement {}
export type DOMAttributes<T = DOMElement> = React.AriaAttributes &
  React.DOMAttributes<T> &
  DataAttributes & {
    id?: string;
    role?: React.AriaRole;
    tabIndex?: number;
    style?: React.CSSProperties;
  };

export type Merge<M, N> =
  N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;
export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>,
) => R & React.RefAttributes<any>;

export type ComponentPropsWithAs<T extends React.ElementType, Y> = Y & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | keyof Y>;
