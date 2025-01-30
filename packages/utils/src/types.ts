import { type As } from "./component";

type RenderFunction<Component extends As, Props extends object = object> = {
  <AsComponent extends As = Component>(
    props: Omit<Props, keyof React.ComponentPropsWithoutRef<AsComponent>> &
      React.ComponentPropsWithoutRef<AsComponent> & {
        as?: AsComponent;
      },
  ): React.ReactElement | null;
  displayName?: string | undefined;
};

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
