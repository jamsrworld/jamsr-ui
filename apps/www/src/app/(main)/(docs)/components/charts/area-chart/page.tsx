import { VariantPage } from "@/components/docs/variant-page";
import { AreaChart1 } from "./examples/area-chart-1";
import { AreaChart2 } from "./examples/area-chart-2";
import { AreaChartCustom } from "./examples/area-chart-custom";
import { type Metadata } from "next";

const title = "Area Chart";
const description = `An area chart displays quantitative data graphically, 
emphasizing trends over time by filling the area beneath a line.`;

export const metadata: Metadata = {
  title,
  description,
};

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <AreaChartCustom />
      <AreaChart1 />
      <AreaChart2 />
    </VariantPage>
  );
};

export default Page;
