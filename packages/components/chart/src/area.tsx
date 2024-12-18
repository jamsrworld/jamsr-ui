/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Area as AreaBase, type AreaProps as Props } from "recharts";

export type AreaProps = Props;

// @ts-expect-error typeError
export class Area extends AreaBase {
  static displayName = AreaBase.displayName;

  static defaultProps: AreaProps = {
    ...(super.defaultProps as AreaProps),
    type: "monotone",
    strokeWidth: 2,
    activeDot: {
      strokeWidth: 2,
      r: 5,
    },
  };

  render() {
    // @ts-expect-error TypeError
    return <AreaBase {...this.props} />;
  }
}
