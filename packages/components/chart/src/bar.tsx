/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Bar as BarBase, type BarProps as Props } from "recharts";

export type BarProps = Props;

// @ts-expect-error typeError
export class Bar extends BarBase {
  static displayName = BarBase.displayName;

  static defaultProps: BarProps = {
    ...(super.defaultProps as BarProps),
    barSize: 32,
    radius: [8, 8, 0, 0],
  };

  render() {
    // @ts-expect-error TypeError
    return <BarBase {...this.props} />;
  }
}
