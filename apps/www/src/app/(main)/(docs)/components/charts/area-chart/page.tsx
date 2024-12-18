import { VariantPage } from "@/components/docs/variant-page";
import { type Metadata } from "next";
import { AreaChartGradient } from "./examples/area-chart-gradient";
import { AreaChartMultiSeries } from "./examples/area-chart-multi-series";
import { AreaChartMultiSeriesGradient } from "./examples/area-chart-multi-series-gradient";
import { AreaChartMultiSeriesGradientStack } from "./examples/area-chart-multi-series-gradient-stack";
import { AreaChartMultiSeriesStack } from "./examples/area-chart-multi-series-stack";
import { AreaChartSolid } from "./examples/area-chart-solid";

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
      <AreaChartSolid />
      <AreaChartGradient />
      <AreaChartMultiSeries />
      <AreaChartMultiSeriesGradient />
      <AreaChartMultiSeriesStack />
      <AreaChartMultiSeriesGradientStack />
    </VariantPage>
  );
};

export default Page;
