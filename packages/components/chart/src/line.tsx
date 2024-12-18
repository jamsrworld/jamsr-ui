/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Line as LineBase, type LineProps as Props } from "recharts";

export type LineProps = Props;

// @ts-expect-error typeError
export class Line extends LineBase {
  static displayName = LineBase.displayName;

  static defaultProps: LineProps = {
    ...(super.defaultProps as LineProps),
    type: "monotone",
    strokeWidth: 2,
    activeDot: {
      strokeWidth: 2,
      r: 7,
    },
    dot: {
      strokeWidth: 2,
      r: 4,
    },
  };

  render() {
    // @ts-expect-error TypeError
    return <LineBase {...this.props} />;
  }
}
