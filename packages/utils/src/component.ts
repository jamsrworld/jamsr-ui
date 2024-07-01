export type As<Props = any> = React.ElementType<Props>;
export type PropsOf<T extends As> = React.ComponentProps<T> & {
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
>;

export type ComponentPropsWithAs<T extends React.ElementType, Y = {}> = Y & {
  as?: T;
} & Omit<React.ComponentProps<T>, "as" | keyof Y>;

export type PropGetter<P = Record<string, unknown>> = (props?: P) => P;
