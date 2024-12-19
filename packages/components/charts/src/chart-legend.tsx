import { Legend, type LegendProps } from "recharts";

type Props = LegendProps;

export const ChartLegend = (props: Props) => {
  const categories: string[] = [];
  const color = "success";
  return <Legend />;
  // return (
  //   <div>
  //     <div className="flex w-full justify-end gap-4 p-4 text-xs text-default-500">
  //       {categories.map((item, idx) => {
  //         return (
  //           <div key={idx} className="flex items-center gap-2">
  //             <span
  //               className="size-2 rounded-full"
  //               style={{
  //                 backgroundColor: `hsl(var(--ui-${color}-${(idx + 1) * 200}))`,
  //               }}
  //             />
  //             <span>{item}</span>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};
ChartLegend.displayName = Legend.displayName;
