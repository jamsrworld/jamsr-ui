import { AreaChart1 } from "./_components/area-chart-1";
import { AreaChart2 } from "./_components/area-chart-2";
import { BarChart1 } from "./_components/bar-chart-1";
import { BarChart2 } from "./_components/bar-chart-2";
import { BarChart3 } from "./_components/bar-chart-3";
import { BarChart4 } from "./_components/bar-chart-4";
import { LineChart1 } from "./_components/line-chart-1";
import { PieChart1 } from "./_components/pie-chart-1";
import { RadialChart1 } from "./_components/radial-chart-1";
import { RadialChart2 } from "./_components/radial-chart-2";

const Page = () => {
  return (
    <div className="container mx-auto flex max-w-screen-2xl flex-col gap-16 p-8">
      <AreaChart1 />
      <AreaChart2 />
      <LineChart1 />
      <BarChart1 />
      <BarChart2 />
      <BarChart3 />
      <BarChart4 />
      <PieChart1 />
      <RadialChart1 />
      <RadialChart2 />
    </div>
  );
};

export default Page;
