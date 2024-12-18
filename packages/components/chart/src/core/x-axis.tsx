import { PureComponent } from "react";
import { XAxis as XAxisBase } from "recharts";
import { type Props as XAxisProps } from "recharts/types/cartesian/XAxis";

export class XAxis extends PureComponent<XAxisProps> {
  static displayName = XAxisBase.displayName;

  static defaultProps: XAxisProps = {
    ...(XAxisBase.defaultProps as XAxisProps),
    tickLine: false,
    tick: {
      fill: "hsl(var(--ui-default-500))",
      style: {
        fontSize: "var(--fs-sm)",
      },
    },
    tickFormatter: (value: string) => value.slice(0, 3),
    axisLine: false,
    tickMargin: 10,
  };

  render() {
    return <XAxisBase {...this.props} />;
  }
}
