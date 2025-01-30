import { type As } from "./component";

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As,
> = (
  | RightJoinProps<ComponentProps, AdditionalProps>
  | RightJoinProps<AsProps, AdditionalProps>
) & {
  as?: AsComponent;
};

type RenderFunction<Component extends As, Props extends object = object> = {
  <AsComponent extends As = Component>(
    props: React.ComponentPropsWithoutRef<AsComponent> &
      Omit<Props, keyof React.ComponentPropsWithoutRef<AsComponent>> & {
        as?: AsComponent;
      },
  ): React.ReactElement | null;
  displayName?: string | undefined;
};

// type RenderFunction<Component extends As, Props extends object = object> = {
//   <AsComponent extends As = Component>(
//     props: MergeWithAs<
//       React.ComponentPropsWithoutRef<Component>,
//       React.ComponentPropsWithoutRef<AsComponent>,
//       Props,
//       AsComponent
//     >,
//   ): React.ReactElement | null;
//   displayName?: string | undefined;
// };

// type RenderFunction<Component extends As, Props extends object = object> = {
//   <AsComponent extends As = Component>(
//     props: Omit<React.ComponentPropsWithoutRef<AsComponent>, keyof Props> &
//       Props & {
//         as?: AsComponent;
//       },
//   ): React.ReactElement | null;
//   displayName?: string | undefined;
// };

export function forwardType<Component extends As, Props extends object>(
  component: React.FunctionComponent<
    Props & {
      as?: As;
    }
  >,
) {
  return component as RenderFunction<Component, Props>;
}
