import { VariantPage } from "@/components/docs/variant-page";
import { type Metadata } from "next";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { AreaChartGradient } from "./examples/area-chart-gradient";
import { AreaChartMultiSeries } from "./examples/area-chart-multi-series";
import { AreaChartMultiSeriesGradient } from "./examples/area-chart-multi-series-gradient";
import { AreaChartMultiSeriesStackGradient } from "./examples/area-chart-multi-series-stack-gradient";
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
      <VariantWrapper heading="Solid" bg="secondary">
        <AreaChartSolid />
      </VariantWrapper>
      <VariantWrapper heading="Gradient" bg="secondary">
        <AreaChartGradient />
      </VariantWrapper>

      <VariantWrapper heading="Multi Series" bg="secondary">
        <AreaChartMultiSeries />
      </VariantWrapper>
      <VariantWrapper heading="Multi Series Gradient" bg="secondary">
        <AreaChartMultiSeriesGradient />
      </VariantWrapper>
      <VariantWrapper heading="Multi Series Stack" bg="secondary">
        <AreaChartMultiSeriesStack />
      </VariantWrapper>
      <VariantWrapper heading="Multi Series Stack Gradient" bg="secondary">
        <AreaChartMultiSeriesStackGradient />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
