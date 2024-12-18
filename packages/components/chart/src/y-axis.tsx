import { PureComponent } from "react";
import { YAxis as YAxisBase, type YAxisProps as Props } from "recharts";

export type YAxisProps = Props;
export class YAxis extends PureComponent<YAxisProps> {
  static displayName = YAxisBase.displayName;

  static defaultProps: YAxisProps = {
    ...(YAxisBase.defaultProps as YAxisProps),
    axisLine: false,
    tickLine: false,
    tick: {
      fill: "hsl(var(--ui-default-400))",
      style: {
        fontSize: "var(--fs-xs)",
      },
    },
  };

  render() {
    return <YAxisBase {...this.props} />;
  }
}
