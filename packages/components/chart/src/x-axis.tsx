import { PureComponent } from "react";
import { XAxis as XAxisBase, type XAxisProps as Props } from "recharts";

export type XAxisProps = Props;

export class XAxis extends PureComponent<XAxisProps> {
  static displayName = XAxisBase.displayName;

  static defaultProps: XAxisProps = {
    ...(XAxisBase.defaultProps as XAxisProps),
    tickLine: false,
    tick: {
      fill: "hsl(var(--ui-default-500))",
      style: {
        fontSize: "var(--fs-xs)",
      },
    },
    axisLine: false,
    tickMargin: 10,
  };

  render() {
    return <XAxisBase {...this.props} />;
  }
}
