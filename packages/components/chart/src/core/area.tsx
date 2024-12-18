/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Area as AreaBase } from "recharts";
import { type Props as AreaProps } from "recharts/types/cartesian/Area";

export class Area extends AreaBase {
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
    const { activeDot, ...restProps } = this.props;
    const mergedActiveDot = {
      ...Area.defaultProps.activeDot,
      ...(activeDot || {}),
    };
    console.log("mergedActiveDot:->", mergedActiveDot);

    return <AreaBase className="" {...restProps} activeDot={{}} />;
  }
}
