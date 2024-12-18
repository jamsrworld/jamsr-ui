/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Area as AreaBase, type AreaProps as Props } from "recharts";

export type AreaProps = Props;

// @ts-expect-error typeError
export class Area extends AreaBase {
  static displayName = AreaBase.displayName;

  static defaultProps: AreaProps = {
    ...(super.defaultProps as AreaProps),
    type: "monotone",
    stroke: "hsl(var(--ui-primary))",
    fill: "hsl(var(--ui-primary))",
    strokeWidth: 2,
    activeDot: {
      stroke: `hsl(var(--ui-primary))`,
      strokeWidth: 2,
      fill: `hsl(var(--ui-background))`,
      r: 5,
    },
  };

  render() {
    return <AreaBase className="" {...this.props} activeDot={{ r: 5 }} />;
  }
}
