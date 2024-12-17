import { AreaChart1 } from "./_components/area-chart-1";
import { BarChart1 } from "./_components/bar-chart-1";
import { BarChart2 } from "./_components/bar-chart-2";
import { BarChart3 } from "./_components/bar-chart-3";
import { CircleChart1 } from "./_components/circle-chart-1";
import { CircleChart2 } from "./_components/circle-chart-2";
import { CircleChart3 } from "./_components/circle-chart-3";

const Page = () => {
  return (
    <div className="container mx-auto flex max-w-screen-2xl flex-col gap-16 p-8">
      <AreaChart1 />
      <BarChart1 />
      <BarChart2 />
      <BarChart3 />
      <CircleChart1 />
      <CircleChart2 />
      <CircleChart3 />
    </div>
  );
};

export default Page;
