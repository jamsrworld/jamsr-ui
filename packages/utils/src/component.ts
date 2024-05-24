/* eslint-disable @typescript-eslint/no-explicit-any */

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
  Target,
  "transition" | "as" | "color" | OmitAdditionalProps
>;

export type RightJoinProps<
  SourceProps extends object = object,
  OverrideProps extends object = object,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = object,
  AsComponent extends As = As,
> = (RightJoinProps<ComponentProps, AdditionalProps> | RightJoinProps<AsProps, AdditionalProps>) & {
  as?: AsComponent;
};

export type InternalForwardRefRenderFunction<
  Component extends As,
  Props extends object = object,
  OmitKeys extends keyof any = never,
> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentPropsWithoutRef<Component>,
      Omit<React.ComponentPropsWithoutRef<AsComponent>, OmitKeys>,
      Props,
      AsComponent
    >,
  ): React.ReactElement | null;
  readonly $$typeof: symbol;
  defaultProps?: Partial<Props> | undefined;
  propTypes?: React.WeakValidationMap<Props> | undefined;
  displayName: string;
};

export type InternalForwardRefRenderFunction2<Props extends object = object> = {
  (props: Props): React.ReactElement | null;
  readonly $$typeof: symbol;
  defaultProps?: Partial<Props> | undefined;
  propTypes?: React.WeakValidationMap<Props> | undefined;
  displayName: string;
};

export type As<Props = any> = React.ElementType<Props>;
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};
export type UIProps<T extends As = "div", OmitKeys extends keyof any = never> = Omit<
  PropsOf<T>,
  "ref" | "color" | "slot" | "size" | "defaultChecked" | "defaultValue" | OmitKeys
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

export type Merge<M, N> = N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;
export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>,
) => R & React.RefAttributes<any>;

export type ComponentPropsWithAs<T extends React.ElementType, Y> = Y & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | keyof Y> & {
    className?: string;
  };
