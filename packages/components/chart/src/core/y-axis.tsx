import { PureComponent } from "react";
import { YAxis as YAxisBase } from "recharts";
import { type Props as YAxisProps } from "recharts/types/cartesian/YAxis";

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

// export const YAxis = (props: ComponentProps<typeof YAxisBase>) => {
//   const defaultProps = YAxisBase.defaultProps;
//   return (
//     <YAxisBase
//       {...defaultProps}
//       axisLine={false}
//       tickLine={false}
//       tick={{
//         fill: "hsl(var(--ui-default-400))",
//         style: {
//           fontSize: "var(--fs-xs)",
//         },
//       }}
//       {...props}
//     />
//   );
// };
// YAxis.defaultProps = YAxisBase.defaultProps;
