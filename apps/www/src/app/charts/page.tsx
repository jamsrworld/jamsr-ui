import { CircleChart1 } from "./_components/circle-chart-1";
import { CircleChart2 } from "./_components/circle-chart-2";
import { CircleChart3 } from "./_components/circle-chart-3";

const Page = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      {/* <ChartA /> */}
      {/* <BarChartExample /> */}
      <CircleChart1 />
      <CircleChart2 />
      <CircleChart3 />
    </div>
  );
};

export default Page;
